import React, { useMemo, useRef, useState } from "react";
import {
  Upload,
  X,
  CheckCircle,
  User,
  Mail,
  MapPin,
  Briefcase,
  FileText,
  MessageSquare,
} from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;

  // Professional Background
  currentStatus: "" | "student" | "recent_grad" | "early" | "mid";
  fieldIndustry:
    | ""
    | "software_it"
    | "climate_tech"
    | "health"
    | "education"
    | "agritech"
    | "finance"
    | "other";
  fieldIndustryOther: string;
  employed: "" | "yes" | "no";

  // Career Goals & Motivation
  careerGoals: string[]; // up to 3
  expectedOutcomes: string[]; // up to 3
  challenges: string;

  // Program Fit & Logistics
  hoursPerWeek: "" | "5_10" | "10_20" | "20_plus";
  timeZone: string;
  languages: string[]; // checkboxes
  languagesOther: string;

  // Application Strengths
  strengths: string[]; // up to 3
  linkedinUrl: string;

  // Final steps
  questions: string;
  referralSources: string[]; // checkboxes
  referSomeone: "" | "yes" | "no";
  referEmail: string;

  agreeTerms: boolean;
  newsletter: boolean;
};

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",

  currentStatus: "",
  fieldIndustry: "",
  fieldIndustryOther: "",
  employed: "",

  careerGoals: [],
  expectedOutcomes: [],
  challenges: "",

  hoursPerWeek: "",
  timeZone: "",
  languages: [],
  languagesOther: "",

  strengths: [],
  linkedinUrl: "",

  questions: "",
  referralSources: [],
  referSomeone: "",
  referEmail: "",

  agreeTerms: false,
  newsletter: false,
};

const MAX_MULTI = 3;
const MAX_FILE_MB = 10;

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const canSubmit = useMemo(
    () =>
      formData.agreeTerms &&
      !!formData.firstName &&
      !!formData.lastName &&
      !!formData.email &&
      !!formData.phone &&
      formData.currentStatus !== "" &&
      !!uploadedFile,
    [formData, uploadedFile]
  );

  // ---- helpers
  const toggleLimitedArray = (key: keyof FormState, value: string) => {
    setFormData((prev) => {
      const arr = new Set<string>((prev[key] as string[]) || []);
      if (arr.has(value)) {
        arr.delete(value);
      } else {
        if (arr.size >= MAX_MULTI) return prev; // enforce limit
        arr.add(value);
      }
      return { ...prev, [key]: Array.from(arr) };
    });
  };

  const onChange =
    <K extends keyof FormState>(key: K) =>
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
        | React.ChangeEvent<HTMLSelectElement>
    ) => {
      const t = e.target;
      // checkbox groups handled separately
      if (t instanceof HTMLInputElement && t.type === "checkbox") {
        setFormData((p) => ({ ...p, [key]: t.checked }));
      } else {
        setFormData((p) => {
          // Infer type based on key
          const value: string | boolean = t.value;
          // For radio/select fields, value is always string
          // For checkboxes, handled above
          return { ...p, [key]: value };
        });
      }
    };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > MAX_FILE_MB * 1024 * 1024) {
      setErrorMsg(`File is too large. Max ${MAX_FILE_MB}MB.`);
      return;
    }
    if (
      !["application/pdf", "application/msword"].includes(f.type) &&
      !f.name.match(/\.(pdf|doc|docx)$/i)
    ) {
      setErrorMsg("Please upload a PDF, DOC or DOCX.");
      return;
    }
    setErrorMsg(null);
    setUploadedFile(f);
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    const f = e.dataTransfer.files?.[0];
    if (!f) return;
    if (f.size > MAX_FILE_MB * 1024 * 1024) {
      setErrorMsg(`File is too large. Max ${MAX_FILE_MB}MB.`);
      return;
    }
    if (
      !["application/pdf", "application/msword"].includes(f.type) &&
      !f.name.match(/\.(pdf|doc|docx)$/i)
    ) {
      setErrorMsg("Please upload a PDF, DOC or DOCX.");
      return;
    }
    setErrorMsg(null);
    setUploadedFile(f);
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // ---- submit to Web3Forms
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setSubmitStatus("loading");
    setErrorMsg(null);

    try {
      const fd = new FormData();
      fd.append("access_key", "8fa013a3-311c-401b-8dbc-ff436998fccd");
      fd.append("subject", "New EDGE Application");
      fd.append("from_name", `${formData.firstName} ${formData.lastName}`);
      fd.append("botcheck", ""); // honeypot (optional)

      // Basic identity
      fd.append("First Name", formData.firstName);
      fd.append("Last Name", formData.lastName);
      fd.append("Phone", formData.phone);
      fd.append("Email", formData.email);

      // Professional background
      fd.append(
        "Current Status",
        ({
          student: "Student (graduating in 2025)",
          recent_grad: "Recent graduate (0–2y)",
          early: "Early-career (2–5y)",
          mid: "Mid-career (5+ y)",
          "": "",
        } as const)[formData.currentStatus]
      );
      fd.append(
        "Field/Industry",
        {
          software_it: "Software / IT",
          climate_tech: "Climate tech",
          health: "Health",
          education: "Education",
          agritech: "Agritech",
          finance: "Finance",
          other: "Other",
          "": "",
        }[formData.fieldIndustry]
      );
      if (formData.fieldIndustry === "other" && formData.fieldIndustryOther) {
        fd.append("Field/Industry (Other)", formData.fieldIndustryOther);
      }
      fd.append(
        "Currently Employed",
        formData.employed === "" ? "" : formData.employed.toUpperCase()
      );

      // Career goals
      formData.careerGoals.forEach((v) => fd.append("Career Goals[]", v));
      formData.expectedOutcomes.forEach((v) =>
        fd.append("Expected Outcomes[]", v)
      );
      if (formData.challenges) fd.append("Challenges", formData.challenges);

      // Program fit
      fd.append(
        "Hours per week",
        {
          "": "",
          "5_10": "5–10",
          "10_20": "10–20",
          "20_plus": "20+",
        }[formData.hoursPerWeek]
      );
      if (formData.timeZone) fd.append("Time Zone", formData.timeZone);
      formData.languages.forEach((v) => fd.append("Languages[]", v));
      if (formData.languages.includes("Other") && formData.languagesOther) {
        fd.append("Languages (Other)", formData.languagesOther);
      }

      // Strengths
      formData.strengths.forEach((v) => fd.append("Strengths[]", v));
      if (formData.linkedinUrl) fd.append("LinkedIn/Portfolio", formData.linkedinUrl);

      // Final steps
      if (formData.questions) fd.append("Questions", formData.questions);
      formData.referralSources.forEach((v) =>
        fd.append("Referral Sources[]", v)
      );
      if (formData.referSomeone) fd.append("Refer someone", formData.referSomeone);
      if (formData.referEmail) fd.append("Referral Email", formData.referEmail);

      // Consent
      fd.append("Newsletter Opt-in", formData.newsletter ? "Yes" : "No");
      fd.append("Agree to Terms", formData.agreeTerms ? "Yes" : "No");

      // File
      if (uploadedFile) fd.append("CV", uploadedFile);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const json = (await res.json()) as { success?: boolean; message?: string };
      if (!json.success) {
        setSubmitStatus("error");
        setErrorMsg(json.message || "Submission failed.");
        return;
      }

      setSubmitStatus("success");
      // reset after a moment
      setTimeout(() => {
        setSubmitStatus("idle");
        setFormData(initialForm);
        setUploadedFile(null);
      }, 2500);
    } catch {
      setSubmitStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  // ---- UI
  if (submitStatus === "success") {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto max-w-2xl px-6 py-20">
          <div className="text-center">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-8" />
            <h1 className="text-4xl font-bold tracking-tight text-black mb-6 md:text-5xl">
              Application Submitted!
            </h1>
            <p className="text-lg font-light text-black md:text-xl max-w-lg mx-auto">
              Thanks! We’ve received your application and emailed a copy to our
              team.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="min-h-screen bg-white">
      <div className="container mx-auto max-w-4xl px-6 py-42">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-md text-black mb-6">
            Join Digeto’s Global Career Accelerator, a 3 month program to launch your International Career
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-light text-black md:text-xl">
            Complete this 5-minute application to get started. Limited seats for
            September 2025!
          </p>
        </div>

        <div className="space-y-16">
          {/* Personal */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <User className="w-6 h-6 text-black" />
              <h2 className="text-2xl font-bold text-black">Personal Info</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-3">
                  First Name *
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={onChange("firstName")}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="First name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-3">
                  Last Name *
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={onChange("lastName")}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="Last name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-3">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={onChange("phone")}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="(000) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={onChange("email")}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="example@example.com"
                />
              </div>
            </div>
          </section>

          {/* Professional Background */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-black" />
              <h2 className="text-2xl font-bold text-black">
                Professional Background
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <p className="mb-3 text-sm font-medium text-black">
                  Which best describes your current status?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    ["student", "Student (graduating in 2025)"],
                    ["recent_grad", "Recent graduate (0–2 years)"],
                    ["early", "Early-career professional (2–5 years)"],
                    ["mid", "Mid-career professional (5+ years)"],
                  ].map(([val, label]) => (
                    <label
                      key={val}
                      className="flex items-center gap-3 rounded-2xl border border-gray-200 p-3"
                    >
                      <input
                        type="radio"
                        name="currentStatus"
                        value={val}
                        checked={formData.currentStatus === (val as FormState["currentStatus"])}
                        onChange={onChange("currentStatus")}
                        className="h-4 w-4"
                      />
                      <span className="text-sm text-black">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-3">
                    What is your current field or industry?
                  </label>
                  <select
                    value={formData.fieldIndustry}
                    onChange={onChange("fieldIndustry")}
                    className="w-full px-4 py-3 border border-gray-200 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  >
                    <option value="">Please Select</option>
                    <option value="software_it">Software / IT</option>
                    <option value="climate_tech">Climate tech</option>
                    <option value="health">Health</option>
                    <option value="education">Education</option>
                    <option value="agritech">Agritech</option>
                    <option value="finance">Finance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {formData.fieldIndustry === "other" && (
                  <div>
                    <label className="block text-sm font-medium text-black mb-3">
                      *Please be specific if you chose "Other"
                    </label>
                    <input
                      type="text"
                      value={formData.fieldIndustryOther}
                      onChange={onChange("fieldIndustryOther")}
                      className="w-full px-4 py-3 border border-gray-200 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      placeholder="Your field"
                    />
                  </div>
                )}
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-black">
                  Are you currently employed?
                </p>
                <div className="flex gap-6">
                  {["yes", "no"].map((v) => (
                    <label key={v} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="employed"
                        value={v}
                        checked={formData.employed === (v as FormState["employed"])}
                        onChange={onChange("employed")}
                        className="h-4 w-4"
                      />
                      <span className="text-sm capitalize text-black">{v}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Career Goals & Motivation */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-6 h-6 text-black" />
              <h2 className="text-2xl font-bold text-black">
                Career Goals & Motivation
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <p className="mb-3 text-sm font-medium text-black">
                  Why do you want a global career? (Select up to {MAX_MULTI})
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    ["Work with international teams", "international_teams"],
                    ["Transition to a role abroad", "role_abroad"],
                    [
                      "Gain experience in impact-driven industries (ESG, climate tech, etc.)",
                      "impact_industries",
                    ],
                    [
                      "Build a cross-cultural professional network",
                      "cross_cultural_network",
                    ],
                    [
                      "Develop leadership skills for global markets",
                      "leadership_skills",
                    ],
                  ].map(([label, val]) => (
                    <label
                      key={val}
                      className="flex items-center gap-3 rounded-2xl border border-gray-200 p-3"
                    >
                      <input
                        type="checkbox"
                        checked={formData.careerGoals.includes(val)}
                        onChange={() => toggleLimitedArray("careerGoals", val)}
                        className="h-4 w-4"
                      />
                      <span className="text-sm text-black">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-black">
                  What specific outcomes do you expect from this program? (Top{" "}
                  {MAX_MULTI})
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    [
                      "Hands-on international project experience with startups and SME’s",
                      "hands_on_project",
                    ],
                    ["Internship and career guidance", "internship_guidance"],
                    ["Mentorship from industry leaders", "mentorship"],
                    ["Global networking opportunities", "global_networking"],
                    ["Skill certifications for my resume", "skill_certs"],
                  ].map(([label, val]) => (
                    <label
                      key={val}
                      className="flex items-center gap-3 rounded-2xl border border-gray-200 p-3"
                    >
                      <input
                        type="checkbox"
                        checked={formData.expectedOutcomes.includes(val)}
                        onChange={() =>
                          toggleLimitedArray("expectedOutcomes", val)
                        }
                        className="h-4 w-4"
                      />
                      <span className="text-sm text-black">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-3">
                  What challenges are you currently facing in pursuing a global
                  career?
                </label>
                <textarea
                  value={formData.challenges}
                  onChange={onChange("challenges")}
                  rows={3}
                  className="w-full px-6 py-4 border border-gray-200 rounded-3xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-blue resize-none"
                  placeholder="(1–2 sentences max)"
                />
              </div>
            </div>
          </section>

          {/* Program Fit & Logistics */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Mail className="w-6 h-6 text-black" />
              <h2 className="text-2xl font-bold text-black">
                Program Fit & Logistics
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <p className="mb-3 text-sm font-medium text-black">
                  How many hours per week can you commit?
                </p>
                <div className="flex flex-wrap gap-6">
                  {[
                    ["5_10", "5–10 hours (part-time)"],
                    ["10_20", "10–20 hours (recommended)"],
                    ["20_plus", "20+ hours (full-time)"],
                  ].map(([val, label]) => (
                    <label key={val} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="hoursPerWeek"
                        value={val}
                        checked={formData.hoursPerWeek === (val as FormState["hoursPerWeek"])}
                        onChange={onChange("hoursPerWeek")}
                        className="h-4 w-4"
                      />
                      <span className="text-sm text-black">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-3">
                    What time zone are you in?
                  </label>
                  <input
                    type="text"
                    value={formData.timeZone}
                    onChange={onChange("timeZone")}
                    className="w-full px-4 py-3 border border-gray-200 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    placeholder="e.g., Europe/Paris"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-3">
                    Languages (besides English)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["French", "Spanish", "Mandarin", "Arabic", "Other"].map(
                      (lang) => (
                        <label
                          key={lang}
                          className="flex items-center gap-3 rounded-2xl border border-gray-200 p-3"
                        >
                          <input
                            type="checkbox"
                            checked={formData.languages.includes(lang)}
                            onChange={() => {
                              const set = new Set(formData.languages);
                              if (set.has(lang)) {
                                set.delete(lang);
                              } else {
                                set.add(lang);
                              }
                              setFormData((p) => ({
                                ...p,
                                languages: Array.from(set),
                              }));
                            }}
                            className="h-4 w-4"
                          />
                          <span className="text-sm text-black">{lang}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                {formData.languages.includes("Other") && (
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-black mb-3">
                      *Please be specific if you chose "Other"
                    </label>
                    <input
                      type="text"
                      value={formData.languagesOther}
                      onChange={onChange("languagesOther")}
                      className="w-full px-4 py-3 border border-gray-200 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      placeholder="Languages"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Strengths */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="w-6 h-6 text-black" />
              <h2 className="text-2xl font-bold text-black">
                Application Strengths
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <p className="mb-3 text-sm font-medium text-black">
                  What makes you a strong candidate? (Select up to {MAX_MULTI})
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    [
                      "Prior remote/international work experience",
                      "remote_experience",
                    ],
                    ["Technical skills (coding, data, etc.)", "technical_skills"],
                    ["Leadership roles in teams/projects", "leadership"],
                    [
                      "Passion for sustainability/impact-driven work",
                      "sustainability_passion",
                    ],
                    ["Adaptability to new cultures", "adaptability"],
                  ].map(([label, val]) => (
                    <label
                      key={val}
                      className="flex items-center gap-3 rounded-2xl border border-gray-200 p-3"
                    >
                      <input
                        type="checkbox"
                        checked={formData.strengths.includes(val)}
                        onChange={() => toggleLimitedArray("strengths", val)}
                        className="h-4 w-4"
                      />
                      <span className="text-sm text-black">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-3">
                  Share a link to your LinkedIn / portfolio (optional)
                </label>
                <input
                  type="url"
                  value={formData.linkedinUrl}
                  onChange={onChange("linkedinUrl")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="https://linkedin.com/in/your-handle"
                />
              </div>
            </div>
          </section>

          {/* CV Upload */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-6 h-6 text-black" />
              <h2 className="text-2xl font-bold text-black">Upload your CV *</h2>
            </div>

            <div
              className={`relative border-2 border-dashed rounded-3xl p-12 text-center transition-colors ${
                dragActive
                  ? "border-primary-blue bg-blue-50"
                  : uploadedFile
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onDragEnter={(e) => {
                e.preventDefault();
                setDragActive(true);
              }}
              onDragOver={(e) => e.preventDefault()}
              onDragLeave={(e) => {
                e.preventDefault();
                setDragActive(false);
              }}
              onDrop={handleFileDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileSelect}
              />

              {uploadedFile ? (
                <div className="space-y-4">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                  <div>
                    <p className="text-lg font-medium text-black">
                      {uploadedFile.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="inline-flex items-center gap-2 px-6 py-2 text-sm font-medium text-red-700 bg-red-50 rounded-full hover:bg-red-100"
                  >
                    <X className="w-4 h-4" />
                    Remove File
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                  <div>
                    <p className="text-lg font-medium text-black mb-2">
                      Drag & drop your CV here or click to upload
                    </p>
                    <p className="text-sm font-light text-gray-600 mb-6">
                      Supports PDF, DOC, DOCX (max {MAX_FILE_MB}MB)
                    </p>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="rounded-full bg-primary-blue text-white px-6 py-3 font-medium hover:bg-blue-700"
                    >
                      Choose File
                    </button>
                  </div>
                </div>
              )}
            </div>
            {errorMsg && (
              <p className="mt-3 text-sm text-red-600 text-center">{errorMsg}</p>
            )}
          </section>

          {/* Final Questions & Referral */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="w-6 h-6 text-black" />
              <h2 className="text-2xl font-bold text-black">Final Steps</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black mb-3">
                  Do you have questions about the program?
                </label>
                <input
                  type="text"
                  value={formData.questions}
                  onChange={onChange("questions")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="We’ll answer them in your interview!"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-3">
                  How did you hear about us? (Select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "LinkedIn post/ad",
                    "University career center",
                    "Friend/Colleague referral",
                    "Google Search",
                    "Social Media",
                    "Other",
                  ].map((label) => (
                    <label
                      key={label}
                      className="flex items-center gap-3 rounded-2xl border border-gray-200 p-3"
                    >
                      <input
                        type="checkbox"
                        checked={formData.referralSources.includes(label)}
                        onChange={() => {
                          const set = new Set(formData.referralSources);
                          if (set.has(label)) {
                            set.delete(label);
                          } else {
                            set.add(label);
                          }
                          setFormData((p) => ({
                            ...p,
                            referralSources: Array.from(set),
                          }));
                        }}
                        className="h-4 w-4"
                      />
                      <span className="text-sm text-black">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-black">
                  Would you like to refer someone else to the program?
                </p>
                <div className="flex gap-6">
                  {["yes", "no"].map((v) => (
                    <label key={v} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="referSomeone"
                        value={v}
                        checked={formData.referSomeone === (v as FormState["referSomeone"])}
                        onChange={onChange("referSomeone")}
                        className="h-4 w-4"
                      />
                      <span className="text-sm capitalize text-black">{v}</span>
                    </label>
                  ))}
                </div>
              </div>

              {formData.referSomeone === "yes" && (
                <div>
                  <label className="block text-sm font-medium text-black mb-3">
                    If "Yes": Share their email, and we’ll reach out!
                  </label>
                  <input
                    type="email"
                    value={formData.referEmail}
                    onChange={onChange("referEmail")}
                    className="w-full px-4 py-3 border border-gray-200 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    placeholder="friend@example.com"
                  />
                </div>
              )}
            </div>
          </section>

          {/* Terms & Newsletter */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={formData.agreeTerms}
                onChange={onChange("agreeTerms")}
                className="mt-1 w-5 h-5 text-primary-blue border-gray-300 rounded focus:ring-primary-blue"
                required
              />
              <label
                htmlFor="agreeTerms"
                className="text-sm font-light text-black"
              >
                I agree to the{" "}
                <span className="text-primary-blue font-medium">Terms</span> and{" "}
                <span className="text-primary-blue font-medium">Privacy</span> *
              </label>
            </div>
          </section>

          {/* Submit */}
          <div className="text-center pt-8">
            <button
              type="submit"
              disabled={submitStatus === "loading" || !canSubmit}
              className="rounded-full bg-primary-blue text-white px-8 py-4 font-medium text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitStatus === "loading" ? (
                <span className="inline-flex items-center gap-3">
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting…
                </span>
              ) : (
                "Submit"
              )}
            </button>
            {submitStatus === "error" && errorMsg && (
              <p className="mt-3 text-sm text-red-600">{errorMsg}</p>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}