'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { ContactExtra } from '@/types/type';
import ContactModal from './ContactModal';

export default function ContactGrid({ contacts }: { contacts: ContactExtra[] }) {

  const [selectedContact, setSelectedContact] = useState<ContactExtra | null>(null);

  const openModal = (contact: ContactExtra) => {
    setSelectedContact(contact);
  }

  const closeModal = () => {
    setSelectedContact(null);
  }

  return (
    <>
      <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-3">
        {contacts.map((c) => (
          <div key={c.id} className="flex flex-col items-center gap-2" onClick={() => openModal(c)}>
            <div className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform hover:-translate-y-1">
              <Image
                src={`/assets/images/sub/contacts/${c.img}`}
                alt={c.text}
                width={150}
                height={150}
              />
            </div>
            {c.text && <span className="text-sm text-slate-800">{c.text}</span>}
          </div>
        ))}
      </div>

      {selectedContact && (
        <ContactModal contact={selectedContact} onClose={closeModal} />
      )}
    </>
  );
}
