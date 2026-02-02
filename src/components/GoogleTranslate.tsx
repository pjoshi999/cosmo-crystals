"use client";
import React, { useEffect, useRef } from "react";
import Script from "next/script";

interface GoogleTranslateElement {
  new (
    options: {
      pageLanguage: string;
      layout: number;
      autoDisplay: boolean;
      includedLanguages?: string;
    },
    elementId: string,
  ): void;
  InlineLayout: {
    SIMPLE: number;
    HORIZONTAL: number;
    VERTICAL: number;
  };
}

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google?: {
      translate: {
        TranslateElement: GoogleTranslateElement;
      };
    };
  }
}

interface GoogleTranslateProps {
  id?: string;
}

const GoogleTranslate: React.FC<GoogleTranslateProps> = ({
  id = "google_translate_element",
}) => {
  const initializedRef = useRef(false);
  const instanceIdRef = useRef(id);

  useEffect(() => {
    instanceIdRef.current = id;

    // Function to force inline layout
    const forceInlineLayout = () => {
      try {
        const container = document.getElementById(instanceIdRef.current);
        if (!container) return;

        const gadget = container.querySelector(".goog-te-gadget");
        const gadgetSimple = container.querySelector(".goog-te-gadget-simple");
        const menuValue = container.querySelector(".goog-te-menu-value");

        if (gadget) {
          (gadget as HTMLElement).style.display = "inline-block";
          (gadget as HTMLElement).style.height = "auto";
          (gadget as HTMLElement).style.lineHeight = "normal";
        }

        if (gadgetSimple) {
          (gadgetSimple as HTMLElement).style.display = "inline-flex";
          (gadgetSimple as HTMLElement).style.alignItems = "center";
          (gadgetSimple as HTMLElement).style.whiteSpace = "nowrap";
          (gadgetSimple as HTMLElement).style.overflow = "hidden";
        }

        if (menuValue) {
          (menuValue as HTMLElement).style.display = "inline-flex";
          (menuValue as HTMLElement).style.alignItems = "center";
          (menuValue as HTMLElement).style.whiteSpace = "nowrap";

          const allElements = menuValue.querySelectorAll("*");
          allElements.forEach((el) => {
            (el as HTMLElement).style.display = "inline";
            (el as HTMLElement).style.float = "none";
            (el as HTMLElement).style.verticalAlign = "middle";
          });

          const brTags = menuValue.querySelectorAll("br");
          brTags.forEach((br) => br.remove());
        }

        const icon = container.querySelector(".goog-te-gadget-icon");
        if (icon) {
          (icon as HTMLElement).style.display = "none";
        }
      } catch (error) {
        console.error("Error fixing translate layout:", error);
      }
    };

    const observer = new MutationObserver(() => {
      forceInlineLayout();
    });

    const initWidget = () => {
      if (initializedRef.current) return;

      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          instanceIdRef.current,
        );
        initializedRef.current = true;

        setTimeout(forceInlineLayout, 100);
        setTimeout(forceInlineLayout, 500);
        setTimeout(forceInlineLayout, 1000);

        const targetNode = document.getElementById(instanceIdRef.current);
        if (targetNode) {
          observer.observe(targetNode, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["style", "class"],
          });
        }
      }
    };

    if (window.google?.translate?.TranslateElement) {
      initWidget();
    } else {
      const originalCb = window.googleTranslateElementInit;
      window.googleTranslateElementInit = () => {
        if (originalCb) originalCb();
        initWidget();
      };
    }

    return () => {
      observer.disconnect();
    };
  }, [id]);

  return (
    <>
      <div id={id} className="translate-widget" />
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
};

export default GoogleTranslate;
