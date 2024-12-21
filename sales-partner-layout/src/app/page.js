// app/page.js
import { redirect } from 'next/navigation';

export default function Page() {
  // Redirect to /home
  redirect('/home');
}
