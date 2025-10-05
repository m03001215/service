'use client';

import { useState, useCallback } from 'react';

export const useAccordion = (initialExpandedId?: string) => {
  const [expandedId, setExpandedId] = useState<string | null>(
    initialExpandedId || null
  );

  const toggleAccordion = useCallback((accordionId: string) => {
    setExpandedId((prev: string | null) =>
      prev === accordionId ? null : accordionId
    );
  }, []);

  const isExpanded = useCallback(
    (accordionId: string) => {
      return expandedId === accordionId;
    },
    [expandedId]
  );

  return {
    expandedId,
    toggleAccordion,
    isExpanded,
  };
};
