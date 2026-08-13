function AnimatedWords({ text, startDelay = 0 }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block opacity-0 animate-word-reveal"
          style={{ animationDelay: `${startDelay + i * 0.03}s` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </>
  );
}

export default AnimatedWords;