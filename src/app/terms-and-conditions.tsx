import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TermsAndConditions() {
  const sections = [
    { title: "Acceptance of Terms", content: "By accessing or using the Website, participating in any events, or becoming a member of our community, you acknowledge and agree to comply with these Terms and Conditions. If you do not agree with any part of these Terms, please refrain from using the Website or participating in any events." },
    { title: "Eligibility for Membership", content: "To become a member of the M.E.T. community, you must:\n- Be at least 18 years old.\n- Complete and pass the interview conducted by M.E.T. Ventures, as outlined on the Website.\n- Attend a minimum of 4 engagements per year to maintain membership status.\n- Adhere to all community guidelines set forth in this Agreement." },
    { title: "Membership Requirements", content: "- Engagement Participation: Each member is required to attend a minimum of 4 engagements per calendar year. These engagements may include social events, networking activities, or other events organized by M.E.T. Ventures.\n- Code of Conduct: M.E.T. Ventures fosters a professional, respectful, and inclusive community. Members are prohibited from making flirtatious, inappropriate, or otherwise disruptive approaches to any member. Any behavior deemed inappropriate or violating community guidelines will result in immediate dismissal from the community.\n- Dismissal from Community: M.E.T. Ventures reserves the right to remove any member who violates the community guidelines without prior notice. This decision is final, and no refunds or compensations will be provided in the event of dismissal." },
    { title: "Events and Ticket Sales", content: "- Event Participation: M.E.T. Ventures organizes events that provide opportunities for members to engage and network. Events may be virtual, in-person, or hybrid. The details of each event will be made available on the Website.\n- Ticket Sales: Tickets for events are sold through the Website or authorized third-party platforms. By purchasing a ticket, you agree to the event's terms and conditions, including cancellation and refund policies, as outlined in this Agreement.\n- Refunds and Cancellations: Tickets are non-refundable unless otherwise stated in the event's specific terms. M.E.T. Ventures reserves the right to cancel an event at its discretion, in which case a full refund will be issued. Cancellations made by attendees will not result in a refund unless specified in the individual event's terms.\n- Ticket Transfer: Tickets may not be transferred, sold, or resold without prior consent from M.E.T. Ventures. Unauthorized transfer or resale of tickets is prohibited." },
    { title: "User Content", content: "- Content Ownership: Any content submitted by users on the Website, including but not limited to forum posts, profile information, and event submissions, remains the property of the user but grants M.E.T. Ventures a license to use, reproduce, and display it for community purposes.\n- Prohibited Content: You are prohibited from submitting content that is unlawful, offensive, defamatory, harassing, or violates the rights of any third party. M.E.T. Ventures reserves the right to remove any content that violates these terms." },
    { title: "Community Guidelines", content: "- Respectful Interaction: Members must engage with each other in a manner that is respectful, professional, and aligned with the mission of M.E.T. Ventures.\n- No Flirtatious Behavior: Any form of flirtatious or inappropriate interaction with other members will result in immediate expulsion from the community.\n- Harassment and Abuse: Any form of harassment, discrimination, or abuse towards other members or M.E.T. Ventures staff will result in immediate dismissal from the community.\n- Violation Consequences: Members found violating the community guidelines may be removed without prior warning, and access to the Website or any event may be revoked." },
    { title: "Privacy and Data Protection", content: "M.E.T. Ventures values your privacy and is committed to protecting your personal information. By using the Website, you consent to the collection and use of your personal data in accordance with our Privacy Policy.\n\n- Data Collection: We collect information provided by you during registration, event participation, and other interactions on the Website. This includes personal details, payment information, and engagement activity.\n- Data Usage: Your data will be used for internal purposes, including communication, event organization, and community management." },
    { title: "Intellectual Property", content: "- Trademarks: All trademarks, logos, and service marks displayed on the Website and in connection with our services are the property of M.E.T. Ventures or their respective owners. Unauthorized use of these marks is prohibited.\n- Copyright: The content, design, and structure of the Website are protected by copyright. Unauthorized reproduction or distribution of the content is prohibited." },
    { title: "Disclaimers and Limitation of Liability", content: "- No Guarantee of Success: M.E.T. Ventures does not guarantee any specific outcome from attending events, networking, or engaging with members. Participation in events and community activities is at your own risk.\n- Event Modifications: M.E.T. Ventures reserves the right to modify or cancel events, including the event format, speakers, or schedule, without liability.\n- Limitation of Liability: M.E.T. Ventures is not responsible for any direct, indirect, incidental, or consequential damages resulting from your use of the Website, participation in events, or interactions with other members." },
    { title: "Force Majeure", content: "M.E.T. Ventures shall not be held liable for any failure to perform its obligations under this Agreement due to circumstances beyond its reasonable control, including but not limited to natural disasters, acts of terrorism, or changes in laws or regulations." },
    { title: "Termination", content: "M.E.T. Ventures may terminate your access to the Website or community if you violate these Terms and Conditions or for any other reason, at its sole discretion. Termination does not affect your obligations under this Agreement, including any unpaid balances for tickets or memberships." },
    { title: "Indemnification", content: "You agree to indemnify, defend, and hold harmless M.E.T. Ventures, its affiliates, employees, agents, and representatives from any claims, losses, damages, or expenses arising out of your use of the Website, participation in events, or violation of these Terms and Conditions." },
    { title: "Governing Law", content: "This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which M.E.T. Ventures is headquartered, without regard to its conflict of laws principles. Any disputes shall be resolved in the courts located in that jurisdiction." },
    { title: "Amendments", content: "M.E.T. Ventures reserves the right to amend these Terms and Conditions at any time. Any changes will be posted on the Website, and the updated version will be effective immediately upon posting. Your continued use of the Website constitutes your acceptance of the updated Terms." },
  ]

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl text-gray-900">
      <Card className="mb-8 bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center">Mingle Eat Talk Ventures - Terms and Conditions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-lg">Effective Date: November 16, 2024</p>
          <p className="mt-4 text-lg">
            Welcome to Mingle Eat Talk Ventures ("M.E.T. Ventures", "we", "our", "us"), the curated socializing and networking community platform, operated through the website www.mingleeattalk.com ("Website"). These Terms and Conditions ("Agreement") govern your use of our Website, participation in community activities, events, and any services provided by M.E.T. Ventures. By using the Website and engaging with our platform, you agree to be bound by these Terms and Conditions.
          </p>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {sections.map((section, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border border-yellow-200 bg-white rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-yellow-50 hover:no-underline">
              <span className="text-xl font-semibold">{section.title}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pt-2 pb-4 text-gray-700">
              <p className="whitespace-pre-line">{section.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Card className="mt-8 bg-yellow-100 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Disclaimer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            The information provided on the Website, including any community-related materials, event details, or content shared by members, is for informational purposes only. M.E.T. Ventures does not endorse, guarantee, or assume responsibility for the accuracy or completeness of any content, event, or engagement listed on the Website.
          </p>
          <p className="text-gray-700 mb-4">
            While we take reasonable measures to ensure that events and community activities are conducted in a safe and professional environment, M.E.T. Ventures does not accept responsibility for any injuries, losses, or damages incurred as a result of attending events or engaging with other members.
          </p>
          <p className="text-gray-700 mb-4">
            Members and event participants agree to take full responsibility for their own actions and interactions while using the Website or attending events.
          </p>
          <p className="text-gray-700">
            By using this Website and engaging in our community, you acknowledge that M.E.T. Ventures is not responsible for any personal conflicts or misunderstandings between members, and you agree to resolve any such matters privately.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

