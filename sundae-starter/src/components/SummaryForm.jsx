export const SummaryForm = () => {
  return (
    <>
      <input
        id='summary-form-checkbox'
        name='summary-form-checkbox'
        type='checkbox'
      />
      <label htmlFor='summary-form-checkbox'>Disable button</label>

      <br />
      <button id='summary-form-submit-button' name='summary-form-submit-button'>
        Submit
      </button>
    </>
  );
};
