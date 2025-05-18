import Image from 'next/image'
import Link from 'next/link'
import { CoffeeBorder } from '../CoffeeBorder'
import { IconifyDesign } from '../IconifyDesign'
import { createMailtoLink } from '@/app/utils/mailto'

export const Footer = () => {
  return (
    <footer id="footer" className="bg-[#4e0c0c] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Contact */}
        <div>
          <Image
            src="/logo/roasted-coffee-white.png"
            alt="Roastery Coffee Logo"
            width={120}
            height={60}
          />
          <p className="mt-4">📞 +62 821-2019-7582</p>
          <p className="mt-2">📧 wahyurama1217@gmail.com</p>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">COMPANY</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#">About us</Link>
            </li>
            <li>
              <Link href="#">Media</Link>
            </li>
            <li>
              <Link href="#">Cafe Locations</Link>
            </li>
            <li>
              <Link href="#">Brew Guide</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Our Policies */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">OUR POLICIES</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Shipping Policy</Link>
            </li>
            <li>
              <Link href="#">Return Policy</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">GET IN TOUCH</h4>
          <div className="flex space-x-4">
            <div className="relative group flex flex-col items-center w-fit">
              <Link href="https://www.instagram.com/_wahyu_ramadhan">
                <IconifyDesign icon="line-md:instagram" />
              </Link>
              <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                Direct Message to Instagram
              </div>
            </div>
            <div className="relative group flex flex-col items-center w-fit">
              <Link
                href={createMailtoLink(
                  'wahyurama1217@gmail.com',
                  'Halo Wahyu',
                  'Saya ingin menghubungi Anda'
                )}
                className="flex items-center justify-center"
              >
                <IconifyDesign icon="mdi:email-outline" />
              </Link>

              {/* Tooltip */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                Send Email
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <CoffeeBorder widthBorder="w-[42.2vw]" />

      {/* Bottom Info */}
      <div className="py-4 text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
        <p>© Copyright 2025 | Wahyu Ramadhan</p>
        <div>
          <p>Design Inspired By CrawlDepth</p>
          <p>Website created by Wahyu Ramadhan</p>
        </div>
      </div>
    </footer>
  )
}
