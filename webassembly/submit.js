const [result, setResult] = React.useState({ root: undefined, iterations: [] });

function handleSubmit(event) {
  event.preventDefault();
  const worker = new Worker('worker.js');
  worker.onmessage = function (message) {
    if (message.data.type === 'RESULT') {
      const result = message.data.payload;
      setResult(result);
      worker.terminate();
    }
  };
  worker.postMessage({
    type: 'CALCULATE',
    payload: { tolerance: tolerance, initial_guess: initial_guess }
  });
}
