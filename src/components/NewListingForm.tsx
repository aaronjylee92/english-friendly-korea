import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // For later if we use a Select for mainCategory

export interface NewListingSubmission {
  businessName: string;
  businessWebsite?: string;
  // mainCategory: string; // Removed
  // otherCategories?: string; // Removed
  address?: string;
  phone?: string;
  description?: string; // Made optional
  submitterName?: string;
  submitterEmail?: string; // Will encourage valid email via text, but not strict type
  additionalNotes?: string;
}

export function NewListingForm() {
  const [formData, setFormData] = useState<NewListingSubmission>({
    businessName: '',
    // mainCategory: '', // Removed
    // description: '', // No longer required for initial state if optional
    // submitterEmail: '', // No longer required for initial state if optional
  });
  // const [submitted, setSubmitted] = useState(false); // Not currently used for displaying success message in form itself

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // const handleSelectChange = (value: string) => { // For later if we use a Select for mainCategory
  //   setFormData(prev => ({ ...prev, mainCategory: value }));
  // };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Basic validation for businessName client-side before "submitting"
    if (!formData.businessName.trim()) {
      alert("Please enter the Business Name.");
      return;
    }
    console.log("New Listing Submission Data:", formData);
    alert("Thank you for your submission! It has been logged to the console. Backend processing is not yet implemented.");
    setFormData({
        businessName: '',
        businessWebsite: '',
        // mainCategory: '', // Removed
        // otherCategories: '', // Removed
        address: '',
        phone: '',
        description: '',
        submitterName: '',
        submitterEmail: '',
        additionalNotes: '',
    });
    // setSubmitted(true); // Not currently used
  };

  if (/* submitted */ false) {
    // Keep this simple, or could be a more styled message
    // return <p className="text-green-600 text-center">Thank you! Your submission has been received.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <p className="text-sm text-muted-foreground">Only the Business Name is required. All other fields are optional, but the more information you provide, the better!</p>
      <div>
        <Label htmlFor="businessName" className="block text-sm font-medium mb-1">Business Name <span className="text-red-500">*</span></Label>
        <Input type="text" name="businessName" id="businessName" value={formData.businessName} onChange={handleChange} required className="w-full" />
      </div>

      <div>
        <Label htmlFor="businessWebsite" className="block text-sm font-medium mb-1">Business Website (Optional)</Label>
        <Input type="text" name="businessWebsite" id="businessWebsite" value={formData.businessWebsite || ''} onChange={handleChange} className="w-full" placeholder="https://example.com" />
      </div>

      {/* mainCategory field removed */}
      {/* otherCategories field removed */}

      <div>
        <Label htmlFor="address" className="block text-sm font-medium mb-1">Address (Optional)</Label>
        <Textarea name="address" id="address" rows={2} value={formData.address || ''} onChange={handleChange} className="w-full" placeholder="Full address if known" />
      </div>

      <div>
        <Label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number (Optional)</Label>
        <Input type="tel" name="phone" id="phone" value={formData.phone || ''} onChange={handleChange} className="w-full" placeholder="010-1234-5678" />
      </div>

      <div>
        <Label htmlFor="description" className="block text-sm font-medium mb-1">Description (Optional)</Label>
        <Textarea name="description" id="description" rows={4} value={formData.description || ''} onChange={handleChange} className="w-full" placeholder="Tell us about the business and its English-friendliness (e.g., English menus, English-speaking staff)."/>
      </div>
      
      <hr className="my-6 border-border" />

      <h3 className="text-lg font-medium mb-3">Your Information (Optional, for follow-up)</h3>
      <div>
        <Label htmlFor="submitterName" className="block text-sm font-medium mb-1">Your Name</Label>
        <Input type="text" name="submitterName" id="submitterName" value={formData.submitterName || ''} onChange={handleChange} className="w-full" />
      </div>

      <div>
        <Label htmlFor="submitterEmail" className="block text-sm font-medium mb-1">Your Email <span className="text-xs text-muted-foreground">(Recommended for updates)</span></Label>
        <Input type="text" name="submitterEmail" id="submitterEmail" value={formData.submitterEmail || ''} onChange={handleChange} className="w-full" placeholder="your@email.com" />
      </div>

      <div>
        <Label htmlFor="additionalNotes" className="block text-sm font-medium mb-1">Additional Notes (Optional)</Label>
        <Textarea name="additionalNotes" id="additionalNotes" rows={3} value={formData.additionalNotes || ''} onChange={handleChange} className="w-full" placeholder="Anything else we should know?" />
      </div>

      <div>
        <Button type="submit" className="w-full sm:w-auto">Submit Listing</Button>
      </div>
    </form>
  );
}

export default NewListingForm;
