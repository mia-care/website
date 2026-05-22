"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface SearchItem {
  title: string;
  href: string;
}

interface SearchBarProps {
  items: SearchItem[];
  defaultValue?: string;
  onSearch: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({
  items,
  defaultValue = "",
  onSearch,
  placeholder = "Search...",
}: SearchBarProps) {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync if the URL param changes externally (browser back/forward)
  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  const suggestions =
    inputValue.trim().length >= 2
      ? items
          .filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()))
          .slice(0, 6)
      : [];

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  function handleClear() {
    setInputValue("");
    setOpen(false);
    onSearch("");
    inputRef.current?.focus();
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-lg">
      <div
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full"
        style={{
          background: "var(--bg-raised)",
          border: "1px solid var(--bg-border-strong)",
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          aria-hidden="true"
          style={{ flexShrink: 0, color: "var(--text-muted)" }}
        >
          <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M10.5 10.5L13.5 13.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            if (suggestions.length > 0) setOpen(true);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setOpen(false);
              onSearch(inputValue);
            }
            if (e.key === "Escape") {
              setOpen(false);
            }
          }}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-sm outline-none"
          style={{ color: "var(--text-primary)" }}
          aria-label={placeholder}
          autoComplete="off"
        />

        {inputValue && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--text-muted)", flexShrink: 0 }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M1 1l10 10M11 1L1 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>

      {open && suggestions.length > 0 && (
        <div
          role="listbox"
          className="absolute top-full left-0 right-0 mt-1.5 rounded-xl overflow-hidden z-40"
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--bg-border-strong)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          }}
        >
          {suggestions.map((item, i) => (
            <button
              key={item.href}
              type="button"
              role="option"
              aria-selected="false"
              onMouseDown={(e) => {
                e.preventDefault();
                router.push(item.href);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[var(--bg-raised)]"
              style={{
                color: "var(--text-primary)",
                borderBottom: i < suggestions.length - 1 ? "1px solid var(--bg-border)" : "none",
              }}
            >
              {item.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
