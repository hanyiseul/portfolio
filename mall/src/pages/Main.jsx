import Button, { ButtonGroup } from '../components/Button/Button';  // default import 방식
import Title from '../components/Typography/Title/Title';

export default function Main() {
  return (
    <>
      <Title tag="h1" title=""></Title>
      <ul>
        <li>
          <Button text="로그아웃" />

          <ButtonGroup>
            <Button text="로그아웃" />
            <Button text="로그아웃" />
          </ButtonGroup>
        </li>
      </ul>
    </>
  );
}
