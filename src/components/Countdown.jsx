import React, { useEffect, useState } from 'react';

export default function TypingParagraph() {
  const fullText = 'Contando os segundos para o momento mais especial das nossas vidas... 💖';
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    setTypedText('');
    let i = 0;
    const type = () => {
      if (i < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(i));
        i++;
        setTimeout(type, 40);
      }
    };
    type();
  }, [fullText]);

  return (
    <p
      style={{
        fontSize: '1.2rem',
        fontStyle: 'italic',
        color: '#B91C1C',
        textAlign: 'center',
        margin: '20px 0',
        userSelect: 'none',
      }}
    >
      {typedText}
    </p>
  );
}
