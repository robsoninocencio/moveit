// @flow
import * as React from "react";
type Props = {};
export function ExperienceBar(props: Props) {
  return (
    <header className="experience-bar">
      <span>0 xp</span>
      <div>
        <div style={{ width: "50%" }} />
        <span className="current-experience" style={{ left: "50%" }}>
          300 xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}
