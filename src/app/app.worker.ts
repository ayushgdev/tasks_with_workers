// import { FilesetResolver, GestureRecognizer } from '@mediapipe/tasks-vision';

// async function runGestureRecognizer(image: any) {
//   const vision = await FilesetResolver.forVisionTasks(
//     'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm '
//   );
//   const gestureRecognizer = await GestureRecognizer.createFromOptions(vision, {
//     baseOptions: {
//       modelAssetPath:
//         'https://storage.googleapis.com/mediapipe-tasks/gesture_recognizer/gesture_recognizer.task',
//     },
//     numHands: 2,
//   });

//   const gestureRecognitionResult = gestureRecognizer.recognize(image);
//   postMessage(gestureRecognitionResult);
// }

onmessage = (image) => {
  // runGestureRecognizer(image);
  console.log('got message here inworker');
  postMessage('Sending message to client');
};
