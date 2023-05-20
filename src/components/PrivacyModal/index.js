import React from "react";

const PrivacyModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const policyText = (
    <p>
      Qui velit magna velit ipsum qui officia veniam excepteur aliqua sunt
      velit fugiat. Qui velit magna velit ipsum qui officia veniam
      excepteur aliqua sunt velit fugiat.Qui velit magna velit ipsum qui
      officia veniam excepteur aliqua sunt velit fugiat. Qui velit magna
      velit ipsum qui officia veniam excepteur aliqua sunt velit
      fugiat.Qui velit magna velit ipsum qui officia veniam excepteur
      aliqua sunt velit fugiat. Qui velit magna velit ipsum qui officia
      veniam excepteur aliqua sunt velit fugiat.Qui velit magna velit
      ipsum qui officia veniam excepteur aliqua sunt velit fugiat. Qui
      velit magna velit ipsum qui officia veniam excepteur aliqua sunt
      velit fugiat.
    </p>
  );
  return (
    <>
      <button className="item1" onClick={() => setOpen(true)}>
        Privacy Policy
      </button>
    </>
  );
};

export default PrivacyModal;