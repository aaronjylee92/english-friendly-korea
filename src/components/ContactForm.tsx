import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement form submission logic (e.g., send to an API endpoint)
    // For now, just log to console or show an alert
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form data:", data);
    alert("Form submitted (see console for data). Backend not implemented yet.");
    event.currentTarget.reset(); // Optional: Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div>
        <Label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</Label>
        <Input type="text" name="name" id="name" required className="w-full" />
      </div>
      <div>
        <Label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</Label>
        <Input type="email" name="email" id="email" required className="w-full" />
      </div>
      <div>
        <Label htmlFor="message" className="block text-sm font-medium mb-1">Message</Label>
        <Textarea name="message" id="message" rows={4} required className="w-full" />
      </div>
      <div>
        <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
      </div>
    </form>
  );
}

export default ContactForm;
