import React from "react";

const Research = () => {
  return (
    <>
      <div className="w-full h-fit flex justify-between items-start gap-2.5 px-1.25">
        <div className="flex-1">LLM Research</div>
        <div className="flex-3 flex flex-col gap-3.5 justify-center items-start">
          <div className="flex flex-col">
            <h2 className="text-(--txt-main) select-none">Outline</h2>
            <p className="text-(--txt-sec)">
              A-RICD is a resource-efficient method for reducing hallucinations
              in large language models. It replaces the need for two separate
              models with a single LoRA adapter, and introduces per-question
              dynamic alpha contrast tuning instead of a static alpha weight,
              thus improving both accuracy by 38.7% and memory efficiency.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-(--txt-main) select-none">Title</h2>
            <span className="text-(--txt-sec)">
              A-RICD: Adapter-based Resource-efficient Induce-then-Contrast
              Decoding for Reducing Hallucinations in Large Language Models
            </span>
          </div>
        </div>
        <div className="flex-1 text-(--txt-sec) text-right flex flex-col">
          <a
            href="https://github.com/mdalbakiakon/A-RICD"
            target="_blank"
            className="text-(--txt-main) hover:text-(--txt-sec)"
          >
            Source
          </a>
        </div>
      </div>

      {/* research performance */}
      <div className="my-25 w-full h-fit flex flex-col justify-center items-start gap-2.5 px-1.25">
        <h2>
          Case Performance{" "}
          <span className="text-(--txt-sec)">
            (LLaMA-2-7B-Chat-HF - MC1 Score on TruthfulQA Benchmark)
          </span>
        </h2>

        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-start gap-2.5 text-right">
            <span className="font-head text-(--txt-ter) select-none text-[136px] leading-30 tracking-[-9px]">
              46.32
            </span>
            <span className="font-body text-(--txt-sec)">% Baseline</span>
          </div>
          <div className="flex justify-center items-start gap-2.5 text-right">
            <span className="font-head text-(--txt-main) select-none text-[136px] leading-30 tracking-[-9px]">
              64.26
            </span>
            <span className="font-body">% A-RICD</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Research;
