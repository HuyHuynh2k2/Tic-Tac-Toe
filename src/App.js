function MyButton() {
  return (
    <button onClick={() => alert('You Clicked me!')}>I am a button</button>
  );
}

export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}