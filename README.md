# Smart Inventory Management System - Transportation Center

A lightweight, mobile-first, real-time inventory management solution designed for logistical excellence. Built to solve the challenge of real-time asset tracking in dynamic military/organizational environments.

## 🚀 Vision & Purpose
This system was developed to provide an intuitive, responsive, and efficient way to manage unit supplies. Moving away from static spreadsheets to a cloud-based SQL database allows for multiple users to interact with the data simultaneously, ensuring accurate inventory levels and reduced logistical friction.

The project is designed to be **modular and scalable**, serving as a blueprint for other units and organizations looking for a "plug-and-play" inventory solution.

## ✨ Key Features
- **Mobile-First Design:** Optimized for field use with "Bottom-Sheet" modals, large touch targets, and a floating action button (FAB) for quick additions.
- **Real-Time Data:** Powered by **Supabase (PostgreSQL)**, providing instant synchronization across all devices.
- **Intelligent Inventory:** Built-in anti-duplication logic that detects existing items and prevents inventory fragmentation by merging quantities.
- **Multimedia Support:** Native integration with device cameras for instant image capture, alongside gallery uploads.
- **Admin Control:** Secure administrative layer for managing records, including editing item names, categories, quantities, and deleting obsolete entries.
- **Visual Overview:** Toggle between a structured table view and a visual gallery card view.

## 🛠 Tech Stack
- **Frontend:** HTML5, Tailwind CSS (Responsive Design).
- **Backend/DB:** Supabase (PostgreSQL + Storage Bucket).
- **Icons:** FontAwesome.
- **Fonts:** Rubik (Google Fonts).

## 🌍 Future Scalability (Roadmap)
This system is designed to be deployed across different units and companies with minimal configuration:
1. **Configurable Environment:** Modular structure allows swapping Supabase project URLs and API keys for each new deployment.
2. **Branding:** Easy customization of the system logo (`Logo_hovala_new.png`) and organizational identity.
3. **Multi-Unit Capability:** The system can be cloned and deployed in minutes for any inventory-heavy organization.

## 📖 Deployment Guide
1. **Supabase Setup:**
   - Create a new Supabase project.
   - Run the SQL schema for the `inventory` table.
   - Create a Storage Bucket named `item-images`.
   - Set up the necessary RLS (Row Level Security) policies for public read/write access.
2. **Configuration:**
   - Update the `SUPABASE_URL` and `SUPABASE_ANON_KEY` in the `index.html` file.
   - Replace `Logo_hovala_new.png` with your organization's logo in the root directory.
3. **Hosting:**
   - Deploy directly via GitHub Pages, Vercel, or any static hosting provider.

## 👤 Credits
**System Architect & Developer:** Capt. (Res.) Elad Shushan

*Developed with the goal of improving logistical efficiency and streamlining inventory management for transportation and supply centers.*
