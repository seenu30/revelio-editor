'use client';

import { useEffect, useRef } from 'react';
import { Editor } from '@tiptap/core';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';

const Tiptap = () => {
  const editorContainerRef = useRef(null);

  useEffect(() => {
    const editor = new Editor({
      element: editorContainerRef.current,
      extensions: [Document, Paragraph, Text],
      content: '<p>Example Text</p>',
      autofocus: true,
      editable: true,
      injectCSS: false,
    });

    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <main>
      <div ref={editorContainerRef} className="editor"></div>
    </main>
  );
};

export default Tiptap;
