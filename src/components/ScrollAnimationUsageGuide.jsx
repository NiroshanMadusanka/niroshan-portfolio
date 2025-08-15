import React from "react";

const ScrollAnimationUsageGuide = () => {
  return (
    <div className="p-8 bg-theme rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Scroll Animation Usage Guide</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">
            1. ScrollReveal Component
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            Use for individual elements with fade-in animations.
          </p>
          <pre className="bg-theme-secondary-100 p-2 rounded text-xs">
            {`<ScrollReveal direction="up" delay={0.2} duration={0.8}>
  <h2>Your Content</h2>
</ScrollReveal>`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            2. ScrollRevealGroup Component
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            Use for multiple elements with staggered animations.
          </p>
          <pre className="bg-theme-secondary-100 p-2 rounded text-xs">
            {`<ScrollRevealGroup direction="up" staggerDelay={0.1}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</ScrollRevealGroup>`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Available Props</h3>
          <ul className="text-sm text-gray-600 list-disc list-inside">
            <li>
              <strong>direction:</strong> 'up' | 'down' | 'left' | 'right'
            </li>
            <li>
              <strong>delay:</strong> Animation delay in seconds
            </li>
            <li>
              <strong>duration:</strong> Animation duration in seconds
            </li>
            <li>
              <strong>staggerDelay:</strong> Delay between staggered animations
            </li>
            <li>
              <strong>once:</strong> Whether to animate only once
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimationUsageGuide;
