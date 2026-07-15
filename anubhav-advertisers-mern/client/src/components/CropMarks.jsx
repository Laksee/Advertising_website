// Four printer's crop-marks, one per corner. Purely decorative framing that
// signals "this is a proof, precisely cut" — echoes physical print production,
// which is literally part of what an ad agency ships.
export default function CropMarks() {
  return (
    <>
      <span className="crop-mark crop-mark--tl" aria-hidden="true" />
      <span className="crop-mark crop-mark--tr" aria-hidden="true" />
      <span className="crop-mark crop-mark--bl" aria-hidden="true" />
      <span className="crop-mark crop-mark--br" aria-hidden="true" />
    </>
  );
}
