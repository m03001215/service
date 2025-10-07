'use client';

import { motion } from 'framer-motion';
import { Fragment } from 'react';

import type {
  BlogContentSection,
  BlogPostDetail,
  BlogSectionAside,
  BlogSectionCard,
  BlogSectionListItem,
  BlogSectionTable,
  BlogSectionTimelineItem,
  BlogSubsection,
} from '@/types';
import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './BlogDetailBodySection.scss';

interface BlogDetailBodySectionProps {
  post: BlogPostDetail;
}

const renderParagraphs = (paragraphs: string[]) =>
  paragraphs.map((paragraph, index) => (
    <motion.p
      key={paragraph.substring(0, 16) + index}
      className="section-text"
      variants={fadeIn('up', 14, 0.25 + index * 0.08)}
    >
      {paragraph}
    </motion.p>
  ));

const renderList = (items: BlogSectionListItem[], className: string) => (
  <ul className={className}>
    {items.map(item => (
      <li key={item.text}>
        {item.icon && <ion-icon name={item.icon} aria-hidden={true} />}
        <span>{item.text}</span>
      </li>
    ))}
  </ul>
);

const renderTimeline = (items: BlogSectionTimelineItem[]) => (
  <ul className="blog-detail-timeline">
    {items.map(item => (
      <li key={`${item.marker}-${item.title}`}>
        <span className="timeline-marker">{item.marker}</span>
        <div className="timeline-content">
          <h4 className="h4">{item.title}</h4>
          <p className="section-text">{item.text}</p>
        </div>
      </li>
    ))}
  </ul>
);

const renderTable = (table: BlogSectionTable, className: string) => (
  <div className="blog-detail-table">
    <table className={className}>
      <thead>
        <tr>
          {table.headers.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row, rowIndex) => (
          <tr key={`${row[0]}-${rowIndex}`}>
            {row.map((cell, cellIndex) => (
              <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const renderSubsections = (subsections: BlogSubsection[] | undefined) => {
  if (!subsections?.length) {
    return null;
  }

  return subsections.map(subsection => (
    <Fragment key={subsection.heading}>
      <motion.h3 className="h3" variants={fadeIn('up', 16, 0.35)}>
        {subsection.heading}
      </motion.h3>
      {subsection.paragraphs && renderParagraphs(subsection.paragraphs)}
      {subsection.listItems &&
        renderList(subsection.listItems, 'blog-detail-list')}
      {subsection.timelineItems && renderTimeline(subsection.timelineItems)}
    </Fragment>
  ));
};

const renderAsideContent = (aside: BlogSectionAside) => {
  switch (aside.type) {
    case 'list':
      return (
        <div className="aside-card">
          <h3 className="h4">{aside.title}</h3>
          {aside.listItems && renderList(aside.listItems, 'blog-detail-list')}
          {aside.paragraphs &&
            aside.paragraphs.map(text => (
              <p key={text} className="section-text">
                {text}
              </p>
            ))}
        </div>
      );
    case 'timeline':
      return (
        <div className="aside-card">
          <h3 className="h4">{aside.title}</h3>
          {aside.timelineItems && renderTimeline(aside.timelineItems)}
        </div>
      );
    case 'tags':
      return (
        <div className="aside-card">
          <h3 className="h4">{aside.title}</h3>
          <ul className="blog-detail-tags">
            {aside.tags?.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      );
    case 'table':
      return (
        <div className="aside-card">
          <h3 className="h4">{aside.title}</h3>
          {aside.table && renderTable(aside.table, 'detail-table')}
        </div>
      );
    case 'cards':
      return (
        <div className="aside-card">
          <h3 className="h4">{aside.title}</h3>
          <div className="aside-card__grid">
            {aside.cards?.map((card: BlogSectionCard) => (
              <article key={card.title} className="content-card">
                <h4 className="h5">{card.title}</h4>
                <p className="section-text">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      );
    case 'text':
      return (
        <div className="aside-card">
          <h3 className="h4">{aside.title}</h3>
          {aside.paragraphs?.map(text => (
            <p key={text} className="section-text">
              {text}
            </p>
          ))}
        </div>
      );
    default:
      return null;
  }
};

const renderMainTable = (table: BlogSectionTable | undefined) => {
  if (!table) {
    return null;
  }

  return renderTable(table, 'detail-table detail-table--wide');
};

const BlogDetailBodySection = ({ post }: BlogDetailBodySectionProps) => {
  return (
    <div className="blog-detail-body">
      {post.sections.map((section: BlogContentSection, sectionIndex) => (
        <motion.section
          key={section.id}
          className="section blog-detail-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={staggerContainer(0.18, 0.16)}
        >
          <div className="container blog-detail-section__grid">
            <motion.div
              className="blog-detail-section__content"
              variants={fadeIn('up', 20, 0.25)}
            >
              <span className="section-count">
                {String(sectionIndex + 1).padStart(2, '0')}
              </span>
              <motion.h2 className="h2" variants={fadeIn('up', 20, 0.3)}>
                {section.heading}
              </motion.h2>
              {renderParagraphs(section.paragraphs)}
              {renderSubsections(section.subsections)}
              {renderMainTable(section.table)}
            </motion.div>

            {section.aside && (
              <motion.aside
                className="blog-detail-section__aside"
                variants={fadeInScale(0.55, 0.35)}
              >
                {renderAsideContent(section.aside)}
              </motion.aside>
            )}
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default BlogDetailBodySection;
