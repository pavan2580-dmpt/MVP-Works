import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, ChevronRight } from "lucide-react";

interface FormData {
  clientName: string;
  email: string;
  phoneNumber: string;
  projectDescription: string;
  projectType: string;
  budget: string;
  timeline: string;
  additionalDetails: string;
}

const steps = [
  { id: 1, title: "Basic Information", description: "Client details" },
  { id: 2, title: "Project Details", description: "Project information" },
  { id: 3, title: "Review & Submit", description: "Confirm details" },
];

export default function ProjectFormPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    clientName: "",
    email: "",
    phoneNumber: "",
    projectDescription: "",
    projectType: "",
    budget: "",
    timeline: "",
    additionalDetails: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateStep1 = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.clientName.trim()) {
      newErrors.clientName = "Client name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "Project description is required";
    }
    if (!formData.projectType.trim()) {
      newErrors.projectType = "Project type is required";
    }
    if (!formData.budget.trim()) {
      newErrors.budget = "Budget is required";
    }
    if (!formData.timeline.trim()) {
      newErrors.timeline = "Timeline is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      if (validateStep2()) {
        setCurrentStep(3);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    alert("Project request submitted successfully! We'll get back to you soon.");
    navigate("/");
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Start Your Project
          </h1>
          <p className="text-gray-400 text-lg">
            Tell us about your project and we'll get back to you
          </p>
        </div>

        {/* Stepper */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                      currentStep > step.id
                        ? "bg-gradient-to-r from-pink-500 to-purple-600"
                        : currentStep === step.id
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 ring-4 ring-purple-500/30"
                        : "bg-gray-800 border-2 border-gray-700"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check className="w-6 h-6 text-white" />
                    ) : (
                      <span>{step.id}</span>
                    )}
                  </div>
                  <div className="mt-3 text-center">
                    <p
                      className={`text-sm font-semibold ${
                        currentStep >= step.id ? "text-white" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 transition-all duration-300 ${
                      currentStep > step.id
                        ? "bg-gradient-to-r from-pink-500 to-purple-600"
                        : "bg-gray-800"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Basic Information</h2>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Client Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.clientName}
                  onChange={(e) => handleInputChange("clientName", e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    errors.clientName
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-700 focus:ring-purple-500"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.clientName && (
                  <p className="text-red-400 text-sm mt-1">{errors.clientName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-700 focus:ring-purple-500"
                  }`}
                  placeholder="mvpwroks.build@gmail.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    errors.phoneNumber
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-700 focus:ring-purple-500"
                  }`}
                  placeholder="+91 6281419693"
                />
                {errors.phoneNumber && (
                  <p className="text-red-400 text-sm mt-1">{errors.phoneNumber}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Project Details */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Project Details</h2>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  value={formData.projectDescription}
                  onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                  rows={5}
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.projectDescription
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-700 focus:ring-purple-500"
                  }`}
                  placeholder="Describe your project in detail..."
                />
                {errors.projectDescription && (
                  <p className="text-red-400 text-sm mt-1">{errors.projectDescription}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Type <span className="text-red-400">*</span>
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => handleInputChange("projectType", e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    errors.projectType
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-700 focus:ring-purple-500"
                  }`}
                >
                  <option value="">Select project type</option>
                  <option value="web-app">Web Application</option>
                  <option value="mobile-app">Mobile Application</option>
                  <option value="e-commerce">E-commerce Platform</option>
                  <option value="api">API Development</option>
                  <option value="ai-ml">AI/ML Solution</option>
                  <option value="other">Other</option>
                </select>
                {errors.projectType && (
                  <p className="text-red-400 text-sm mt-1">{errors.projectType}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Budget <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => handleInputChange("budget", e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.budget
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-700 focus:ring-purple-500"
                    }`}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="over-100k">Over $100,000</option>
                  </select>
                  {errors.budget && (
                    <p className="text-red-400 text-sm mt-1">{errors.budget}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Timeline <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => handleInputChange("timeline", e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.timeline
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-700 focus:ring-purple-500"
                    }`}
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6-12months">6-12 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                  {errors.timeline && (
                    <p className="text-red-400 text-sm mt-1">{errors.timeline}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Additional Details
                </label>
                <textarea
                  value={formData.additionalDetails}
                  onChange={(e) => handleInputChange("additionalDetails", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>
            </div>
          )}

          {/* Step 3: Review & Submit */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Review Your Details</h2>
              <p className="text-gray-400 mb-6">
                Please review all the information below. This information cannot be edited.
              </p>

              <div className="space-y-4 bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-gray-400">Client Name</label>
                    <p className="text-white font-medium mt-1">{formData.clientName}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-400">Email</label>
                    <p className="text-white font-medium mt-1">{formData.email}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-400">Phone Number</label>
                    <p className="text-white font-medium mt-1">{formData.phoneNumber}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-400">Project Type</label>
                    <p className="text-white font-medium mt-1">{formData.projectType}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-400">Budget</label>
                    <p className="text-white font-medium mt-1">{formData.budget}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-400">Timeline</label>
                    <p className="text-white font-medium mt-1">{formData.timeline}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-400">Project Description</label>
                  <p className="text-white mt-1 whitespace-pre-wrap">{formData.projectDescription}</p>
                </div>
                {formData.additionalDetails && (
                  <div>
                    <label className="text-sm text-gray-400">Additional Details</label>
                    <p className="text-white mt-1 whitespace-pre-wrap">{formData.additionalDetails}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-800">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                currentStep === 1
                  ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              Back
            </button>
            {currentStep < 3 ? (
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
              >
                Submit Project
                <Check className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

