"use client";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    email: "",
    challenge: "",
    interest: "",
    requestCallback: false,
    phone: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const interestParam = params.get("interest");
      if (interestParam) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFormData((prev) => ({ ...prev, interest: interestParam }));
      }
    }
  }, []);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: string, value: string | boolean, currentData: typeof formData) => {
    let errorMsg = "";
    if (name === "name" && typeof value === "string" && !value.trim()) errorMsg = "El nombre es obligatorio";
    if (name === "company" && typeof value === "string" && !value.trim()) errorMsg = "El hotel o propiedad es obligatorio";
    if (name === "interest" && typeof value === "string" && !value) errorMsg = "Debe seleccionar un servicio";
    
    if (name === "email" && typeof value === "string") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        errorMsg = "El correo electrónico es obligatorio";
      } else if (!emailRegex.test(value)) {
        errorMsg = "Formato de correo inválido";
      }
    }

    if (name === "phone" && currentData.requestCallback && typeof value === "string" && !value.trim()) {
      errorMsg = "El teléfono es obligatorio";
    }

    return errorMsg;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    const fields = ["name", "company", "interest", "email", "phone"];
    fields.forEach(field => {
      if (field === "phone" && !formData.requestCallback) return;
      
      const val = formData[field as keyof typeof formData];
      const err = validateField(field, val, formData);
      if (err) newErrors[field] = err;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        role: "",
        company: "",
        email: "",
        challenge: "",
        interest: "",
        requestCallback: false,
        phone: "",
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const actualValue = type === "checkbox" ? checked : value;
    
    const newFormData = { ...formData, [name]: actualValue };
    
    setFormData(newFormData);
    
    const errorMsg = validateField(name, actualValue, newFormData);
    setErrors((prev) => {
      const updatedErrors = { ...prev };
      if (errorMsg) {
        updatedErrors[name] = errorMsg;
      } else {
        delete updatedErrors[name];
      }
      return updatedErrors;
    });
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-[#121212] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Empiece la conversación
            </h2>
            <div className="w-16 h-[1px] bg-[#B0A387] mb-8"></div>
            <p className="text-neutral-400 font-light leading-relaxed text-lg mb-12">
              Comparta brevemente el contexto de su propiedad y lo que está buscando. Responderemos en menos de 24 horas para organizar una primera llamada sin compromiso.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-5 bg-[#141414] border border-white/5 rounded-sm">
                <div className="shrink-0 text-[#B0A387] opacity-80 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-[0.14em] uppercase text-neutral-500 mb-1">Email</p>
                  <p className="text-[14px] text-neutral-200">hola@ehp-consulting.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[#141414] border border-white/5 rounded-sm">
                <div className="shrink-0 text-[#B0A387] opacity-80 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-[0.14em] uppercase text-neutral-500 mb-1">WhatsApp / Teléfono</p>
                  <p className="text-[14px] text-neutral-200">+1 (000) 000-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[#141414] border border-white/5 rounded-sm">
                <div className="shrink-0 text-[#B0A387] opacity-80 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-[0.14em] uppercase text-neutral-500 mb-1">Operaciones internacionales</p>
                  <p className="text-[14px] text-neutral-200">Caribe · Europa · Latinoamérica · Asia-Pacífico</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {isSuccess ? (
              <div className="p-8 text-center border border-[#6EC88C]/30 bg-[#6EC88C]/5">
                <div className="text-4xl text-[#B0A387] mb-3">✓</div>
                <p className="text-neutral-300 text-[15px] font-light">
                  Mensaje recibido. El equipo EHP se pondrá en contacto con usted en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="name" className="block text-[9.5px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Su nombre"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full bg-white/[0.038] border ${errors.name ? "border-red-500/50 bg-red-500/5 focus:border-red-500" : "border-white/5"} p-[14px] px-[17px] text-white focus:outline-none focus:border-[#B0A387] focus:bg-[#B0A387]/5 transition-colors rounded-none placeholder:text-neutral-600 appearance-none font-light text-[14px]`}
                  />
                  {errors.name && (
                    <motion.p
                      id="name-error"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[#E05050] text-[11px] mt-[5px]"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="role" className="block text-[9.5px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-2">
                    Cargo
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    placeholder="Director General, Owner..."
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full bg-white/[0.038] border border-white/5 p-[14px] px-[17px] text-white focus:outline-none focus:border-[#B0A387] focus:bg-[#B0A387]/5 transition-colors rounded-none placeholder:text-neutral-600 appearance-none font-light text-[14px]"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                  <label htmlFor="company" className="block text-[9.5px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-2">
                    Hotel / Propiedad *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Nombre de la propiedad"
                    value={formData.company}
                    onChange={handleChange}
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? "company-error" : undefined}
                    className={`w-full bg-white/[0.038] border ${errors.company ? "border-red-500/50 bg-red-500/5 focus:border-red-500" : "border-white/5"} p-[14px] px-[17px] text-white focus:outline-none focus:border-[#B0A387] focus:bg-[#B0A387]/5 transition-colors rounded-none placeholder:text-neutral-600 appearance-none font-light text-[14px]`}
                  />
                  {errors.company && (
                    <motion.p
                      id="company-error"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[#E05050] text-[11px] mt-[5px]"
                    >
                      {errors.company}
                    </motion.p>
                  )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="email" className="block text-[9.5px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="correo@hotel.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full bg-white/[0.038] border ${errors.email ? "border-red-500/50 bg-red-500/5 focus:border-red-500" : "border-white/5"} p-[14px] px-[17px] text-white focus:outline-none focus:border-[#B0A387] focus:bg-[#B0A387]/5 transition-colors rounded-none placeholder:text-neutral-600 appearance-none font-light text-[14px]`}
                  />
                  {errors.email && (
                    <motion.p
                      id="email-error"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[#E05050] text-[11px] mt-[5px]"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="block text-[9.5px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-2">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 000 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-white/[0.038] border ${errors.phone ? "border-red-500/50 bg-red-500/5 focus:border-red-500" : "border-white/5"} p-[14px] px-[17px] text-white focus:outline-none focus:border-[#B0A387] focus:bg-[#B0A387]/5 transition-colors rounded-none placeholder:text-neutral-600 appearance-none font-light text-[14px]`}
                  />
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[#E05050] text-[11px] mt-[5px]"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  {/* País */}
                  <label htmlFor="country" className="block text-[9.5px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-2">
                    País
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="País de la propiedad"
                    className="w-full bg-white/[0.038] border border-white/5 p-[14px] px-[17px] text-white focus:outline-none focus:border-[#B0A387] focus:bg-[#B0A387]/5 transition-colors rounded-none placeholder:text-neutral-600 appearance-none font-light text-[14px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-[9.5px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-2">
                    Servicio de interés *
                  </label>
                  <div className="relative">
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className={`w-full bg-white/[0.038] border ${errors.interest ? "border-red-500/50 bg-red-500/5 focus:border-red-500" : "border-white/5"} p-[14px] px-[17px] text-white focus:outline-none focus:border-[#B0A387] focus:bg-[#B0A387]/5 transition-colors rounded-none placeholder:text-neutral-600 appearance-none font-light text-[14px] cursor-pointer`}
                      style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none' viewBox='0 0 12 8'%3E%3Cpath stroke='%237A7060' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M1 1l5 5 5-5'/%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center"
                      }}
                    >
                      <option value="" disabled className="bg-[#121212] text-neutral-500">
                        Seleccione un servicio
                      </option>
                      <option value="auditoria" className="bg-[#121212] text-white">Auditoría hotelera</option>
                      <option value="mystery" className="bg-[#121212] text-white">Mystery Guest</option>
                      <option value="asesoria" className="bg-[#121212] text-white">Asesoría por departamento</option>
                      <option value="formacion" className="bg-[#121212] text-white">Formación ejecutiva</option>
                      <option value="lsp" className="bg-[#121212] text-white">Luxury Service Partnership</option>
                      <option value="sostenibilidad" className="bg-[#121212] text-white">Sostenibilidad ambiental</option>
                      <option value="interim" className="bg-[#121212] text-white">Interim management</option>
                      <option value="certificacion" className="bg-[#121212] text-white">Preparación AAA / Forbes / LHW</option>
                      <option value="otro" className="bg-[#121212] text-white">Otro / varios servicios</option>
                    </select>
                  </div>
                  {errors.interest && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#E05050] text-[11px] mt-[5px]"
                      >
                        {errors.interest}
                      </motion.p>
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <label className="block text-[9.5px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-2">
                  Cuéntenos sobre su propiedad y lo que busca
                </label>
                <textarea
                  rows={4}
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  placeholder="Describa brevemente el contexto de su hotel, el principal desafío que enfrenta y lo que espera de la consultoría..."
                  className="w-full bg-white/[0.038] border border-white/5 p-[14px] px-[17px] text-white focus:outline-none focus:border-[#B0A387] focus:bg-[#B0A387]/5 transition-colors rounded-none placeholder:text-neutral-500 appearance-none font-light text-[14px] resize-y min-h-[120px]"
                ></textarea>
                <p className="text-[12px] text-neutral-500 mt-[10px] leading-relaxed italic">
                  Puede mencionar: número de habitaciones, categoría, estándares actuales o aspiracionales, y cualquier información que considere relevante.
                </p>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-[11px] px-[38px] py-[16px] bg-[#C8A96E] text-[#08080C] text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#DFC08A] hover:-translate-y-[2px] shadow-[0_16px_48px_rgba(200,169,110,0.0)] hover:shadow-[0_16px_48px_rgba(200,169,110,0.28)] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? "Enviando solicitud..." : "Enviar solicitud"}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px]"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
