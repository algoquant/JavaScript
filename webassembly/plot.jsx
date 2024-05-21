function IterationsPlot({ iterations }) {
  const container = React.useRef(null);

  function didUpdate() {
    if (container.current === null || iterations.length === 0) {
      return;
    }
    const spec = iterations2spec(iterations);
    vegaEmbed(container.current, spec);
  }

  const dependencies = [container, iterations];
  React.useEffect(didUpdate, dependencies);

  return <div ref={container} />;
}
