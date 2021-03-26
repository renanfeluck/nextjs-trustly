const loadPayWithMyBank = callback => {
  const existingScript = document.getElementById('payWithMyBank');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src =
      'https://sandbox.paywithmybank.com/start/scripts/pwmb.js?accessId=D61EC9BAF0BB369B9438';
    script.id = 'payWithMyBank';
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();

      // eslint-disable-next-line func-names
      // eslint-disable-next-line consistent-return
      PayWithMyBank.addPanelListener(function (command, event) {
        console.log('event');
        if (command === 'event' && event.type === 'new_location') {
          if (event.data.indexOf('#success') === 0) {
            alert('success!');
            window.location.href = '/confirmation';
          } else {
            alert('cancel!');
          }
          return false;
        }
      });

      PayWithMyBank.establish({
        accessId: 'D61EC9BAF0BB369B9438',
        merchantId: '1004314986',
        metadata: { demo: 'enabled' },
        currency: 'USD',
        paymentType: 'Deferred',
        amount: '100.00',
        description: 'your@email.here',
        merchantReference: '123456',
        returnUrl: '#success',
        cancelUrl: '#cancel',
      });
    };
  }
  if (existingScript && callback) callback();
};
export default loadPayWithMyBank;
