"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = {
  Services: [
    "Mobile App Development",
    "Web App Development",
    "API Design",
    "AI Agents",
    "Cloud Optimisation",
    "Data Migration",
    "UI/UX",
  ],
  Industries: [
    "Healthcare",
    "Finance",
    "Education",
    "E-commerce",
    "Real Estate",
  ],
  "Our Work": [
    "Case Studies", 
    "Portfolio", 
    "Testimonials"
  ],
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (key: string) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/alfabolt-logo.png"
            alt="Alfabolt"
            width={120}
            height={40}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          {Object.entries(navItems).map(([key, items]) => (
            <div key={key} className={styles.navItem}>
              <span className={styles.navLink}>
                {key} <ChevronDown className={styles.chevron} size={16} />
              </span>
              <div className={styles.dropdown}>
                {items.map((item) => (
                  <Link key={item} href="#" className={styles.dropdownItem}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <button className={styles.cta}>Talk to Us</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ""}`}
          >
            <Menu size={24} className={styles.menu} />
            <X size={24} className={styles.close} />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ""}`}>
        {Object.entries(navItems).map(([key, items]) => (
          <div key={key} className={styles.accordionItem}>
            <button
              className={styles.accordionButton}
              onClick={() => toggleAccordion(key)}
            >
              {key}
              <ChevronDown
                size={16}
                className={`${styles.accordionIcon} ${
                  activeAccordion === key ? styles.rotate : ""
                }`}
              />
            </button>
            {activeAccordion === key && (
              <div className={styles.accordionContent}>
                {items.map((item) => (
                  <Link key={item} href="#" className={styles.accordionLink}>
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className={styles.mobileButton}>
          <button className={styles.cta}>Talk to Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
