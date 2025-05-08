import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

// Define an interface for the structure of each clinic record
export interface Clinic {
  name: string;
  mainLink?: string;
  categories?: string; // Might need further parsing if multiple categories exist per clinic
  tags?: string; // Might need further parsing
  location_address?: string;
  contact_phone?: string;
  description?: string;
  demoLink?: string; // Link from expathealthseoul or koreahealthpages
  logo?: string;
  pricingModel?: string;
  lowestPrice?: string;
  images?: string; // Might need parsing if multiple images
  coupon_code?: string;
  coupon_offer?: string;
  contact_name?: string;
  contact_email?: string;
  video?: string;
  location_latitude?: string;
  location_longitude?: string;
  socialMedia_x?: string;
  socialMedia_facebook?: string;
  socialMedia_instagram?: string;
  socialMedia_linkedin?: string;
  socialMedia_youtube?: string;
  socialMedia_github?: string;
  mainCategory?: string; // Renamed from 'main category' for JS convention
}

// Define the path to the CSV file relative to the project root
const CSV_FILE_PATH = path.join(process.cwd(), 'data', 'clinics_categorized.csv');

// Function to load and parse the clinic data
export function loadClinics(): Clinic[] {
  try {
    const csvFile = fs.readFileSync(CSV_FILE_PATH, 'utf8');
    const parsedData = Papa.parse<Record<string, string>>(csvFile, {
      header: true, // Use the first row as headers
      skipEmptyLines: true, // Skip empty lines
      transformHeader: (header) => header.trim().replace(/^main category$/, 'mainCategory'), // Clean headers and handle space in 'main category'
    });

    if (parsedData.errors.length > 0) {
      console.error('Errors parsing CSV:', parsedData.errors);
      // Log errors but attempt to process valid rows
    }

    // Explicitly map parsed data to the Clinic interface
    const clinics: Clinic[] = parsedData.data
      .map(row => ({
        name: row.name || '', // Ensure name is always a string, provide default if missing
        mainLink: row.mainLink || undefined,
        categories: row.categories || undefined,
        tags: row.tags || undefined,
        location_address: row.location_address || undefined,
        contact_phone: row.contact_phone || undefined,
        description: row.description || undefined,
        demoLink: row.demoLink || undefined,
        logo: row.logo || undefined,
        pricingModel: row.pricingModel || undefined,
        lowestPrice: row.lowestPrice || undefined,
        images: row.images || undefined,
        coupon_code: row.coupon_code || undefined,
        coupon_offer: row.coupon_offer || undefined,
        contact_name: row.contact_name || undefined,
        contact_email: row.contact_email || undefined,
        video: row.video || undefined,
        location_latitude: row.location_latitude || undefined,
        location_longitude: row.location_longitude || undefined,
        socialMedia_x: row.socialMedia_x || undefined,
        socialMedia_facebook: row.socialMedia_facebook || undefined,
        socialMedia_instagram: row.socialMedia_instagram || undefined,
        socialMedia_linkedin: row.socialMedia_linkedin || undefined,
        socialMedia_youtube: row.socialMedia_youtube || undefined,
        socialMedia_github: row.socialMedia_github || undefined,
        mainCategory: row.mainCategory || undefined,
      }))
      .filter(clinic => clinic.name); // Filter out rows where the essential 'name' field is missing/empty

    return clinics;

  } catch (error) {
    console.error(`Error reading or parsing CSV file at ${CSV_FILE_PATH}:`, error);
    return []; // Return an empty array in case of error
  }
}

// Example usage (optional, could be removed or used for testing)
// const clinics = loadClinics();
// console.log(`Loaded ${clinics.length} clinic records.`);
// if (clinics.length > 0) {
//   console.log('First clinic record:', clinics[0]);
// }
