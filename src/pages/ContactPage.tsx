import { useState } from "react";
import { Send, Loader2, ArrowUpRight, Sparkles, CheckCircle2, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Page, PageHeader } from "@/components/Page";
import { contactInfo, contactLinks } from "@/lib/contact";

// 🔑 Thay access key của bạn từ https://web3forms.com
const WEB3FORMS_KEY = "01bbfe30-4dda-45ca-9bfa-5944addf86c6";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [field, setField] = useState("");
  const [budget, setBudget] = useState("");

  const resetForm = () => {
    setSubmitted(false);
    setProjectType("");
    setField("");
    setBudget("");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!projectType) {
      toast.error("Bạn hãy chọn loại dự án trước khi gửi.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const getValue = (key: string) => formData.get(key)?.toString().trim() || "Không có";

    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `[ShipCode] Yêu cầu mới từ ${getValue("name")}`,
          from_name: "ShipCode Contact Form",
          name: getValue("name"),
          phone: getValue("phone"),
          email: getValue("email") !== "Không có" ? getValue("email") : undefined,
          "Công ty / Cá nhân": getValue("school"),
          "Loại dự án": projectType,
          "Lĩnh vực": field || "Chưa chọn",
          "Deadline": getValue("deadline"),
          "Ngân sách": budget || "Chưa chọn",
          "Mô tả đề tài": getValue("desc"),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        form.reset();
        toast.success("Gửi yêu cầu thành công!", {
          description: "Chúng tôi sẽ liên hệ bạn trong vòng 30 phút.",
        });
      } else {
        throw new Error(data.message || "Gửi thất bại");
      }
    } catch {
      toast.error("Không thể gửi yêu cầu. Vui lòng thử lại hoặc liên hệ trực tiếp qua Zalo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page>
      <PageHeader
        index="08"
        eyebrow="Liên hệ"
        title={<>Bắt đầu <span className="text-gradient">ship code</span> ngay hôm nay.</>}
        description="Gửi yêu cầu của bạn, chúng tôi sẽ tư vấn miễn phí và báo giá trong vòng 30 phút."
      />

      <div className="container pb-8">
        {/* === MOBILE-FIRST LAYOUT === */}
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:items-start lg:gap-8">

          {/* FORM — always first on mobile */}
          <motion.form
            onSubmit={onSubmit}
            className="premium-card relative overflow-hidden p-5 sm:p-6 md:p-8 lg:col-span-7 lg:order-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Decorative glow - hidden on mobile for performance */}
            <div className="absolute -top-20 -right-20 h-64 w-64 mesh-gradient opacity-25 hidden md:block" />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col items-center justify-center py-12 sm:py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.15 }}
                    className="mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border-2 border-green-500/40 bg-green-500/15"
                  >
                    <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 text-green-400" />
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="font-display text-xl sm:text-2xl font-bold mb-2"
                  >
                    Gửi thành công! 🎉
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-muted-foreground mb-8 max-w-sm text-sm sm:text-base"
                  >
                    Chúng tôi đã nhận yêu cầu và sẽ liên hệ tư vấn cho bạn trong vòng <span className="text-primary font-semibold">30 phút</span>.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    <Button variant="outlineGlow" size="lg" onClick={resetForm} className="group">
                      <RotateCcw className="h-4 w-4 mr-2 group-hover:rotate-[-360deg] transition-transform duration-500" />
                      Gửi yêu cầu khác
                    </Button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="relative space-y-5"
                >
                  {/* Form header */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/25 bg-primary/10">
                        <Sparkles className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-lg sm:text-2xl">Form yêu cầu dự án</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground pl-11">Điền thông tin để được tư vấn chi tiết.</p>
                  </div>

                  {/* Row 1: Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2 group">
                      <Label htmlFor="name" className="group-focus-within:text-primary transition-colors text-sm">Họ và tên *</Label>
                      <Input id="name" name="name" required placeholder="Nguyễn Văn A" className="h-11 sm:h-10 text-base sm:text-sm transition-all focus:shadow-md focus:shadow-primary/10" />
                    </div>
                    <div className="space-y-2 group">
                      <Label htmlFor="phone" className="group-focus-within:text-primary transition-colors text-sm">Số điện thoại / Zalo *</Label>
                      <Input id="phone" name="phone" required placeholder="09xxxxxxxx" className="h-11 sm:h-10 text-base sm:text-sm transition-all focus:shadow-md focus:shadow-primary/10" />
                    </div>
                  </div>

                  {/* Row 2: Email + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2 group">
                      <Label htmlFor="email" className="group-focus-within:text-primary transition-colors text-sm">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="ban@email.com" className="h-11 sm:h-10 text-base sm:text-sm transition-all focus:shadow-md focus:shadow-primary/10" />
                    </div>
                    <div className="space-y-2 group">
                      <Label htmlFor="school" className="group-focus-within:text-primary transition-colors text-sm">Công ty / Cá nhân</Label>
                      <Input id="school" name="school" placeholder="VD: BKHN - CNTT" className="h-11 sm:h-10 text-base sm:text-sm transition-all focus:shadow-md focus:shadow-primary/10" />
                    </div>
                  </div>

                  {/* Row 3: Project type + Field */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm">Loại dự án *</Label>
                      <Select name="projectType" value={projectType} onValueChange={setProjectType} required>
                        <SelectTrigger className="h-11 sm:h-10 text-base sm:text-sm"><SelectValue placeholder="Chọn loại dự án" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Phần mềm Doanh nghiệp">Phần mềm Doanh nghiệp</SelectItem>
                          <SelectItem value="Website / Landing Page">Website / Landing Page</SelectItem>
                          <SelectItem value="Theo yêu cầu khách hàng">Theo yêu cầu khách hàng</SelectItem>
                          <SelectItem value="Khác / chưa rõ">Khác / chưa rõ</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm">Lĩnh vực</Label>
                      <input type="hidden" name="field" value={field} />
                      <Select value={field} onValueChange={setField}>
                        <SelectTrigger className="h-11 sm:h-10 text-base sm:text-sm"><SelectValue placeholder="Chọn lĩnh vực" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Web / Web App">Web / Web App</SelectItem>
                          <SelectItem value="Mobile App">Mobile App</SelectItem>
                          <SelectItem value="AI / Machine Learning">AI / Machine Learning</SelectItem>
                          <SelectItem value="IoT / Embedded">IoT / Embedded</SelectItem>
                          <SelectItem value="Game">Game</SelectItem>
                          <SelectItem value="Blockchain">Blockchain</SelectItem>
                          <SelectItem value="Big Data">Big Data</SelectItem>
                          <SelectItem value="An toàn thông tin">An toàn thông tin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Row 4: Deadline + Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2 group">
                      <Label htmlFor="deadline" className="group-focus-within:text-primary transition-colors text-sm">Deadline mong muốn</Label>
                      <Input id="deadline" name="deadline" type="date" className="h-11 sm:h-10 text-base sm:text-sm transition-all focus:shadow-md focus:shadow-primary/10" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm">Ngân sách dự kiến</Label>
                      <input type="hidden" name="budget" value={budget} />
                      <Select value={budget} onValueChange={setBudget}>
                        <SelectTrigger className="h-11 sm:h-10 text-base sm:text-sm"><SelectValue placeholder="Chọn ngân sách" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Dưới 3 triệu">Dưới 3 triệu</SelectItem>
                          <SelectItem value="3 - 6 triệu">3 - 6 triệu</SelectItem>
                          <SelectItem value="6 - 10 triệu">6 - 10 triệu</SelectItem>
                          <SelectItem value="Trên 10 triệu">Trên 10 triệu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2 group">
                    <Label htmlFor="desc" className="group-focus-within:text-primary transition-colors text-sm">Mô tả đề tài *</Label>
                    <Textarea
                      id="desc"
                      name="desc"
                      required
                      rows={4}
                      placeholder="Mô tả ngắn gọn yêu cầu, tính năng mong muốn, deadline dự kiến..."
                      className="text-base sm:text-sm transition-all focus:shadow-md focus:shadow-primary/10 min-h-[100px]"
                    />
                  </div>

                  {/* Submit */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full h-12 sm:h-11 text-base sm:text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all group"
                      disabled={loading}
                    >
                      {loading ? (
                        <><Loader2 className="animate-spin" /> Đang gửi...</>
                      ) : (
                        <>
                          Gửi yêu cầu
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-xs text-muted-foreground text-center">
                    Yêu cầu sẽ được gửi trực tiếp tới ShipCode. Chúng tôi sẽ phản hồi trong 30 phút.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>

          {/* SIDEBAR — below form on mobile */}
          <motion.aside
            className="space-y-3 lg:col-span-5 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {contactLinks.map((contact) => {
              const content = (
                <>
                  <div className="icon-box shrink-0 !w-10 !h-10 sm:!w-12 sm:!h-12 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                    <contact.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] sm:text-xs uppercase tracking-[0.12em] text-muted-foreground">{contact.label}</div>
                    <div className="mt-0.5 sm:mt-1 inline-flex items-center gap-2 text-sm sm:text-lg font-semibold break-all">
                      <span>{contact.value}</span>
                      {contact.href && <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-primary/80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                    </div>
                  </div>
                </>
              );

              const className = "premium-card group flex items-center gap-3 p-3.5 sm:p-5 md:p-6 transition-all duration-300 hover:border-primary/40";

              if (!contact.href) {
                return (
                  <motion.div key={contact.label} variants={cardVariants} className={className}>
                    {content}
                  </motion.div>
                );
              }

              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noreferrer" : undefined}
                  className={className}
                  variants={cardVariants}
                >
                  {content}
                </motion.a>
              );
            })}

            {/* Working hours card */}
            <motion.div variants={cardVariants} className="premium-card p-4 sm:p-5 md:p-6 relative overflow-hidden">
              <div className="absolute inset-0 mesh-gradient opacity-20" />
              <div className="relative">
                <div className="font-mono text-[10px] sm:text-xs text-primary uppercase tracking-[0.14em] mb-3">Giờ làm việc</div>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between items-center rounded-md px-2.5 sm:px-3 py-1.5 sm:py-2 hover:bg-muted/30 transition-colors">
                    <span className="text-muted-foreground">Thứ 2 - Thứ 6</span>
                    <span className="font-semibold">8:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between items-center rounded-md px-2.5 sm:px-3 py-1.5 sm:py-2 hover:bg-muted/30 transition-colors">
                    <span className="text-muted-foreground">Thứ 7 - CN</span>
                    <span className="font-semibold">9:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between items-center rounded-md px-2.5 sm:px-3 py-1.5 sm:py-2 bg-primary/8 border border-primary/15">
                    <span className="text-primary font-semibold flex items-center gap-1.5 sm:gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                      </span>
                      Hotline gấp
                    </span>
                    <span className="font-bold text-primary">24/7</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </Page>
  );
};

export default ContactPage;
