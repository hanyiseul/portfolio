import Button, { ButtonGroup } from '../components/Button/Button';  // default import 방식

export default function Main() {
  return (
    <ul>
      <li>
        <Button text="로그아웃" />

        <ButtonGroup>
          <Button text="로그아웃" />
          <Button text="로그아웃" />
        </ButtonGroup>
      </li>
    </ul>
  );
}
