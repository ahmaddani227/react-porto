import { ReactNode } from "react";
import { me } from "../../constants/menus/navbar";

interface ReadmeLayoutProps {
  children: ReactNode;
  filename?: string;
}

export default function ReadmeLayout(props: ReadmeLayoutProps) {
  const { children, filename = "README.md" } = props;

  return (
    <div className="py-5 lg:px-[1.55rem] px-fluid">
      <div className="px-5 py-3.5 border rounded-md border-midnight-slate">
        <h5 className="mb-4 text-xs font-medium">
          {me.split(" ")} / {filename}
        </h5>

        {children}
      </div>
    </div>
  );
}
