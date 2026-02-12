import styled from "styled-components";

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 52px;
  height: 28px;
  flex-shrink: 0;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #d9d9d9;
    border-radius: 34px;
    transition: background-color 0.25s ease;
  }

  span::before {
    content: "";
    position: absolute;
    height: 22px;
    width: 22px;
    left: 3px;
    top: 3px;
    background: white;
    border-radius: 50%;
    transition: transform 0.25s ease;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }

  input:checked + span {
    background-color: #7bc47f;
  }

  input:checked + span::before {
    transform: translateX(24px);
  }
`;


type Props = {
  checked: boolean;
  onChange: () => void;
};

export default function Toggle({ checked, onChange }: Props) {
  return (
    <Switch>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span />
    </Switch>
  );
}
