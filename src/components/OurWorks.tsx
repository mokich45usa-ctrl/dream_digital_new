"use client"

import React, { Children, isValidElement } from 'react';

interface StickyTabItemProps {
  title: string;
  id: string | number;
  children: React.ReactNode;
}

const StickyTabItem: React.FC<StickyTabItemProps> = () => {
  return null;
};

interface StickyTabsProps {
  children: React.ReactNode;
  mainNavHeight?: string;
  rootClassName?: string;
  navSpacerClassName?: string;
  sectionClassName?: string;
  stickyHeaderContainerClassName?: string;
  headerContentWrapperClassName?: string;
  headerContentLayoutClassName?: string;
  titleClassName?: string;
  contentLayoutClassName?: string;
}

const StickyTabs: React.FC<StickyTabsProps> & { Item: React.FC<StickyTabItemProps> } = ({
  children,
  mainNavHeight = '6em',
  rootClassName = "bg-black text-white",
  navSpacerClassName = "border-b border-white/15 bg-black",
  sectionClassName = "bg-[#131313]",
  stickyHeaderContainerClassName = "shadow-lg",
  headerContentWrapperClassName = "border-b border-t border-white/15 bg-black",
  headerContentLayoutClassName = "mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8",
  titleClassName = "my-0 text-2xl font-medium leading-none md:text-3xl lg:text-4xl",
  contentLayoutClassName = "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
}) => {
  const stickyTopValue = `calc(${mainNavHeight} - 1px)`;
  const navHeightStyle = { height: mainNavHeight };
  const stickyHeaderStyle = { top: stickyTopValue };

  return (
    <div className={`overflow-clip ${rootClassName}`}>

      <div
        className={`sticky left-0 top-0 z-20 w-full ${navSpacerClassName}`}
        style={navHeightStyle}
        aria-hidden="true"
      />

      {Children.map(children, (child) => {
        if (!isValidElement(child) || child.type !== StickyTabItem) {
          if (process.env.NODE_ENV === 'development' && child != null) {
            console.warn('StickyTabs component expects <StickyTabs.Item> components as direct children.');
          }
          return null;
        }

        const itemElement = child as React.ReactElement<StickyTabItemProps>;
        const { title, id, children: itemContent } = itemElement.props;

        return (
          <section
            key={id}
            className={`relative overflow-clip ${sectionClassName}`}
          >
            <div
              className={`sticky z-10 -mt-px flex flex-col ${stickyHeaderContainerClassName}`}
              style={stickyHeaderStyle}
            >
              <div className={headerContentWrapperClassName}>
                <div className={headerContentLayoutClassName}>
                  <div className="flex items-center justify-between">
                    <h2 className={titleClassName}>
                      {title}
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className={contentLayoutClassName}>
              {itemContent}
            </div>

          </section>
        );
      })}
    </div>
  );
};

StickyTabs.Item = StickyTabItem;

export default StickyTabs;

// Wrapper component for App.tsx compatibility - NAMED EXPORT
export function OurWorksWithSteps({ onSeeMore }: { onSeeMore?: () => void }) {
  return (
    <StickyTabs
      mainNavHeight="5rem"
      rootClassName="bg-white"
      navSpacerClassName="bg-transparent"
      sectionClassName="bg-gradient-to-b from-[#F8F9FE] via-white to-[#F8F9FE]"
    >
      <StickyTabs.Item title="Step 1: Concept" id="concept">
        <div className="py-16">
          <p className="text-center text-gray-600">Concept content placeholder</p>
        </div>
      </StickyTabs.Item>
      
      <StickyTabs.Item title="Step 2: Design" id="design">
        <div className="py-16">
          <p className="text-center text-gray-600">Design content placeholder</p>
        </div>
      </StickyTabs.Item>
      
      <StickyTabs.Item title="Step 3: Development" id="development">
        <div className="py-16">
          <p className="text-center text-gray-600">Development content placeholder</p>
        </div>
      </StickyTabs.Item>
      
      <StickyTabs.Item title="Step 4: Launch" id="launch">
        <div className="py-16">
          <p className="text-center text-gray-600">Launch content placeholder</p>
          {onSeeMore && (
            <div className="text-center mt-8">
              <button
                onClick={onSeeMore}
                className="px-6 py-3 bg-brand text-white rounded-full"
              data-cta="get-started">
                Get Started
              </button>
            </div>
          )}
        </div>
      </StickyTabs.Item>
    </StickyTabs>
  );
}
