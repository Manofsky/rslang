import './audiocall.scss';
import { elem } from '../../utils/creatingElements';

export default function renderAudiocall() {
  const audiocallSection = `
<section class="audiocall none-view">
  <div class="exit"><button class="btn-exit">x</button></div>
  <div class="game-menu">
    <h2>АУДИОВЫЗОВ</h2>
    <p class="game-usefulness">Тренировка улучшает восприятие речи на слух.</p>
    <p>Уровень cложности:</p>
    <div class="difficultyLevel">
      <button class="start-audiocall">1</button>
      <button class="start-audiocall">2</button>
      <button class="start-audiocall">3</button>
      <button class="start-audiocall">4</button>
      <button class="start-audiocall">5</button>
      <button class="start-audiocall">6</button>
    </div>
  </div>
  <div class="gameplay-audiocall none-view">
    <div class="solution-field">
      <div>
        <button class="btn-audio"></button>
        <p class="answer"></p>
      </div>
    </div>
    <div class="answers-audiocall">
      <button class="var">         </button>
      <button class="var">         </button>
      <button class="var">         </button>
      <button class="var">         </button>
      <button class="var">         </button>
    </div>
    <button class="next-btn">НЕ ЗНАЮ</button>
  </div>
</section>
`;
  const main = elem('body') as HTMLElement;
  main.insertAdjacentHTML('beforeend', audiocallSection);
}