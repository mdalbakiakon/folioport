import React from "react";

const Research = () => {
  return (
    <>
      <div className="w-full h-fit flex justify-between items-start gap-2.5 px-1.25 rank-container">
        <div className="flex-1 text-left select-none">LLM Research</div>
        <div className="flex-3 flex flex-col gap-3.5 justify-center items-start">
          <div className="flex flex-col">
            <h2 className="text-(--txt-main) select-none">Outline</h2>
            <p className="text-(--txt-sec) select-text">
              A-RICD is a resource-efficient method for reducing hallucinations
              in large language models. It replaces the need for two separate
              models with a single LoRA adapter, and introduces per-question
              dynamic alpha contrast tuning instead of a static alpha weight,
              thus improving both accuracy by 38.70% and memory efficiency.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-(--txt-main) select-none">Title</h2>
            <span className="text-(--txt-sec) select-text">
              A-RICD: Adapter-based Resource-efficient Induce-then-Contrast
              Decoding for Reducing Hallucinations in Large Language Models.
            </span>
          </div>
        </div>
        <div className="flex-1 text-(--txt-sec) text-right flex flex-col select-none">
          <a
            href="https://github.com/mdalbakiakon/A-RICD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--txt-main) hover:text-(--txt-sec)"
          >
            Source
          </a>
        </div>
      </div>

      {/* research performance */}
      <div className="mt-25 w-full h-fit flex flex-col justify-center items-start gap-2.5 px-1.25 select-none">
        <h2>
          Case Performance{" "}
          <span className="text-(--txt-sec)">
            (LLaMA-2-7B-Chat-HF - MC1 Score on TruthfulQA Benchmark)
          </span>
        </h2>

        <div className="rank-container flex justify-between items-center w-full h-fit gap-5">
          <div className="flex justify-center items-start text-left">
            <span className="font-head-number text-(--txt-ter)">
              46
            </span>
            <span className="font-body text-(--txt-sec)">.32% Baseline</span>
          </div>

          <div className="flex-1 flex justify-start items-start text-left">
            <span className="font-head-number text-(--txt-ter)">
              64
            </span>
            <span className="font-body text-(--txt-sec)">.26% A-RICD NIA (Ours)</span>
          </div>

          <div className="flex justify-center items-start text-right up-gap">
            <span className="font-head-number text-(--txt-main)">
              38
            </span>
            <span className="font-body">.70% Improvement</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Research;
