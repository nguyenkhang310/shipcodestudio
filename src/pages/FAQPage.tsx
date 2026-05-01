import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Page, PageHeader } from "@/components/Page";
import { ArrowRight, MessageCircle, HelpCircle } from "lucide-react";

const faqs = [
  { q: "ShipCode có cam kết bảo mật thông tin đề tài không?", a: "Có. Chúng tôi ký hợp đồng bảo mật (NDA) với mọi khách hàng. Source code và tài liệu của bạn không bao giờ được dùng lại hoặc bán cho người khác." },
  { q: "Quy trình thanh toán như thế nào?", a: "Đặt cọc 30% sau khi chốt đề cương, 40% khi bàn giao bản demo, 30% còn lại khi bàn giao bản cuối + báo cáo. Chuyển khoản hoặc tiền mặt đều được." },
  { q: "Nếu deadline gấp 1-2 tuần thì có nhận không?", a: "Có nhận, tuỳ độ phức tạp. Phụ phí gấp khoảng 20-40%. Liên hệ Zalo hoặc Instagram để được tư vấn chính xác trong 30 phút." },
  { q: "Code có chạy được trên máy mình không? Có hướng dẫn không?", a: "Chúng tôi hỗ trợ setup lên Server/Cloud, cung cấp tài liệu HDSD chi tiết, và hỗ trợ teamview/anydesk nếu bạn gặp khó khăn khi vận hành. Bảo hành đến khi hệ thống hoạt động ổn định." },
  { q: "Có hỗ trợ chỉnh sửa theo yêu cầu bổ sung không?", a: "Có. Trong thời gian bảo trì, mọi chỉnh sửa hợp lý theo phản hồi của khách hàng đều được thực hiện nhanh chóng." },
  { q: "Tôi có thể yêu cầu công nghệ cụ thể không?", a: "Hoàn toàn có. Bạn yêu cầu framework, ngôn ngữ, database, kiến trúc nào – chúng tôi đều đáp ứng đúng theo đặc tả dự án." },
  { q: "Dự án có được bảo mật không?", a: "Cam kết bảo mật tuyệt đối 100% bằng hợp đồng NDA. Source code và ý tưởng kinh doanh của khách hàng được giữ kín hoàn toàn." },
  { q: "Khu vực hỗ trợ có giới hạn không?", a: "Không. ShipCode làm việc trực tuyến với khách hàng toàn quốc và quốc tế. Mọi trao đổi diễn ra online qua Zalo, Telegram, Email hoặc Google Meet." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const FAQPage = () => {
  return (
    <Page>
      <PageHeader
        index="07"
        eyebrow="Câu hỏi thường gặp"
        title={<>Bạn còn <span className="text-gradient">băn khoăn?</span></>}
        description="Tổng hợp những câu hỏi phổ biến nhất từ khách hàng trước khi bắt đầu dự án. Nếu chưa có câu trả lời bạn cần — hãy liên hệ chúng tôi."
      />

      <div className="container max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <motion.div key={i} variants={itemVariants}>
                <AccordionItem
                  value={`item-${i}`}
                  className="premium-card px-3.5 sm:px-5 md:px-6 transition-all duration-300 data-[state=open]:border-primary/40 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/10 hover:border-primary/25 group/faq"
                >
                  <AccordionTrigger className="gap-3 sm:gap-4 py-4 sm:py-5 text-left font-display text-sm sm:text-base font-semibold hover:text-primary hover:no-underline transition-colors duration-300">
                    <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary font-mono text-[10px] sm:text-xs font-bold shrink-0 group-data-[state=open]/faq:bg-primary group-data-[state=open]/faq:text-primary-foreground group-data-[state=open]/faq:border-primary/60 transition-all duration-300">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="flex-1">{f.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 sm:pb-5 pl-10 sm:pl-12 text-sm leading-6 sm:leading-7 text-muted-foreground">
                    <div className="border-l-2 border-primary/20 pl-4">
                      {f.a}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-4"
        >
          {[
            { value: "500+", label: "Khách hàng tin tưởng" },
            { value: "< 30p", label: "Phản hồi tư vấn" },
            { value: "100%", label: "Bảo mật NDA" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -2 }}
              className="rounded-lg border border-border/60 bg-card/40 p-2.5 sm:p-4 text-center transition-all hover:border-primary/30 hover:bg-primary/5"
            >
              <div className="font-display text-lg sm:text-xl font-bold text-gradient md:text-2xl">{stat.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="premium-card relative mt-10 sm:mt-14 overflow-hidden p-6 sm:p-8 text-center md:p-10"
        >
          <div className="absolute inset-0 mesh-gradient opacity-25" />

          {/* Animated glow orb */}
          <motion.div
            className="pointer-events-none absolute -top-20 right-10 w-48 h-48 rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, hsl(42 92% 58% / 0.5), transparent)" }}
            animate={{ scale: [1, 1.3, 1], y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-br from-primary/15 to-transparent"
            >
              <MessageCircle className="h-7 w-7 text-primary" />
            </motion.div>

            <h2 className="font-display font-bold text-2xl md:text-4xl mb-4">Vẫn còn câu hỏi?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Liên hệ trực tiếp để được tư vấn 1-1 miễn phí. Chúng tôi phản hồi trong vòng 30 phút.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button asChild variant="hero" size="lg" className="group shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
                <Link to="/lien-he">
                  Liên hệ ngay <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Page>
  );
};

export default FAQPage;
