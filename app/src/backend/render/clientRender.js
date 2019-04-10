import html from './html';

export default function clientRender() {
  return (req, res) => res.send(html({
    title: 'Weather App'
  }));
}
