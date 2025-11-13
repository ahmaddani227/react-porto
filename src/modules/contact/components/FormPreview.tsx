import CommentedContent from "../../../components/Layouts/Ide/CommentedContent";
import { FormType } from "../types/form.type";

const FormPreview = ({ dataForm }: { dataForm: FormType }) => {
  const { name, email, message } = dataForm;

  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  return (
    <div className="hidden h-full overflow-hidden lg:block">
      <CommentedContent isCommented={false}>
        <p className="text-periwinkle-blue">
          <span className="text-purple-400">const</span> button
          <span className="text-white"> = </span>document.querySelector
          <span className="inline text-slate-muted">(</span>
          <span className="text-peach">'#sendBtn'</span>
          <span className="inline text-slate-muted">);</span>
        </p>
        <br />
        <p className="text-periwinkle-blue">
          <span className="text-purple-400">const</span> message
          <span className="text-slate-muted"> = &#123;</span>
        </p>
        <p className="ps-7 text-periwinkle-blue">
          name: <span className="text-peach">"{name}"</span>
          <span className="text-slate-muted">,</span>
        </p>
        <p className="ps-7 text-periwinkle-blue">
          email: <span className="text-peach">"{email}"</span>
          <span className="text-slate-muted">,</span>
        </p>
        <p className="break-all ps-7 text-periwinkle-blue">
          message: <span className="text-peach">"{message}"</span>
          <span className="text-slate-muted">,</span>
        </p>
        <p className="ps-7">
          date: <span className="text-peach">"{formattedDate}"</span>
          <span className="text-slate-muted">,</span>
        </p>
        <p>&#125;</p>
        <br />
        <p className="text-periwinkle-blue">
          button<span className="text-slate-muted">.</span>
          addEventListener
          <span className="text-slate-muted">(</span>
          <span className="text-peach">'click'</span>
          <span className="text-slate-muted">, () </span>
          <span className="text-purple-400">=&gt; </span>
          <span className="text-slate-muted">&#123;</span>
        </p>
        <p className="ps-7 text-periwinkle-blue">
          form.send
          <span className="text-slate-muted">(</span>
          message
          <span className="text-slate-muted">);</span>
        </p>
        <p>&#125;)</p>
      </CommentedContent>
    </div>
  );
};

export default FormPreview;
