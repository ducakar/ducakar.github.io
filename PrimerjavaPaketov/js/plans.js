var plans = [
  /*
   * Bob
   */
  {
    operator: 'bob',
    title: '4 cente',
    url: 'http://bob.si/ponudba-bob/bob-narocniski-paketi/bob-4-cente',
    baseCost: 0,
    getCost: function (calls, messages, transfer) {
      return {
        amount: (calls + messages + transfer) * 0.04
      };
    }
  },
  {
    operator: 'bob',
    title: '4 cente + 1 GB',
    url: 'http://bob.si/ponudba-bob/bob-narocniski-paketi/bob-4-cente',
    baseCost: 0,
    getCost: function (calls, messages, transfer) {
      return {
        amount: (calls + messages) * 0.04 +
            Math.max(5, Math.ceil(transfer / 1024) * 5)
      };
    }
  },
  {
    operator: 'bob',
    title: 'bigbob',
    url: 'http://bob.si/ponudba-bob/bob-narocniski-paketi/bigbob',
    baseCost: 9.80,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + (calls <= 1000 ? 0 : (calls - 1000) * 0.04) +
            (messages <= 1000 ? 0 : (messages - 1024) * 0.04) +
            transfer * 0.04
      };
    }
  },
  {
    operator: 'bob',
    title: 'bigbob + 1 GB',
    url: 'http://bob.si/ponudba-bob/bob-narocniski-paketi/bigbob',
    baseCost: 9.80,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + (calls <= 1000 ? 0 : (calls - 1000) * 0.04) +
            (messages <= 1000 ? 0 : (messages - 1000) * 0.04) +
            Math.max(5, Math.ceil(transfer / 1024) * 5)
      };
    }
  },
  {
    operator: 'bob',
    title: '5ka',
    url: 'http://bob.si/ponudba-bob/bob-narocniski-paketi/bigbob',
    baseCost: 0,
    getCost: function (calls, messages, transfer) {
      return {
        amount: 5 + (calls <= 100 ? 0 : (calls - 100) * 0.066) +
            (messages <= 100 ? 0 : (messages - 100) * 0.066) +
            (transfer <= 100 ? 0 : (transfer - 100) * 0.066)
      };
    }
  },
  {
    operator: 'bob',
    title: '6.6 centa',
    url: 'http://bob.si/ponudba-bob/bob-narocniski-paketi/bigbob',
    baseCost: 0,
    getCost: function (calls, messages, transfer) {
      return {
        amount: (calls + messages + transfer) * 0.066
      };
    }
  },
  /*
   * Si.mobil
   */
  {
    operator: 'Si.mobil',
    title: 'OPTIMALNI S',
    url: 'https://www.simobil.si/narocniski-paketi/optimalni',
    baseCost: 9.99,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + (calls <= 100 ? 0 : (calls - 100) * 0.22) +
            (messages <= 100 ? 0 : (messages - 100) * 0.22) +
            (Math.ceil(transfer / 250) * 1.99)
      };
    }
  },
  {
    operator: 'Si.mobil',
    title: 'OPTIMALNI M',
    url: 'https://www.simobil.si/narocniski-paketi/optimalni',
    baseCost: 14.99,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + (calls <= 400 ? 0 : (calls - 400) * 0.22) +
            (messages <= 400 ? 0 : (messages - 400) * 0.22) +
            (transfer <= 400 ? 0 : Math.ceil((transfer - 400) / 250) * 1.99)
      };
    }
  },
  {
    operator: 'Si.mobil',
    title: 'SENIOR S',
    url: 'https://www.simobil.si/narocniski-paketi/senior',
    retiredOnly: true,
    baseCost: 7.99,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + (calls <= 100 ? 0 : (calls - 100) * 0.22) +
            (messages <= 100 ? 0 : (messages - 100) * 0.22) +
            (Math.ceil(transfer / 250) * 1.99)
      };
    }
  },
  {
    operator: 'Si.mobil',
    title: 'SENIOR M',
    url: 'https://www.simobil.si/narocniski-paketi/senior',
    retiredOnly: true,
    baseCost: 11.99,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + (calls <= 400 ? 0 : (calls - 400) * 0.22) +
            (messages <= 400 ? 0 : (messages - 400) * 0.22) +
            (transfer <= 400 ? 0 : Math.ceil((transfer - 400) / 250) * 1.99)
      };
    }
  },
  {
    operator: 'Si.mobil',
    title: 'ULTIMATIVNI S',
    url: 'https://www.simobil.si/narocniski-paketi/ultimativni',
    baseCost: 19.99,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + (transfer <= 1000 ? 0 : Math.ceil((transfer - 1000) / 250) * 1.99)
      };
    }
  },
  {
    operator: 'Si.mobil',
    title: 'ULTIMATIVNI M',
    url: 'https://www.simobil.si/narocniski-paketi/ultimativni',
    baseCost: 22.99,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + (transfer <= 3000 ? 0 : Math.ceil((transfer - 3000) / 250) * 1.99)
      };
    }
  },
  {
    operator: 'Si.mobil',
    title: 'ULTIMATIVNI L',
    url: 'https://www.simobil.si/narocniski-paketi/ultimativni',
    baseCost: 26.99,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + (transfer <= 6000 ? 0 : Math.ceil((transfer - 6000) / 250) * 1.99)
      };
    }
  },
  {
    operator: 'Si.mobil',
    title: 'ULTIMATIVNI XL',
    url: 'https://www.simobil.si/narocniski-paketi/ultimativni',
    baseCost: 26.99,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + (transfer <= 15000 ? 0 : Math.ceil((transfer - 15000) / 250) * 1.99)
      };
    }
  },
  {
    operator: 'Si.mobil',
    title: 'ORTO ELASTIK MINI',
    url: 'https://www.simobil.si/narocniski-paketi/orto',
    youngOnly: true,
    baseCost: 15.99,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + (transfer <= 100 ? 0 : Math.ceil((transfer - 100) / 1024) * 4)
      };
    }
  },
  {
    operator: 'Si.mobil',
    title: 'ORTO ELASTIK',
    url: 'https://www.simobil.si/narocniski-paketi/orto',
    youngOnly: true,
    baseCost: 19.99,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost +
            (transfer <= 5 * 1024 ? 0 : Math.ceil((transfer - 5 * 1024) / 1024) * 1)
      };
    }
  },
  {
    operator: 'Si.mobil',
    title: 'SIMPL',
    url: 'https://www.simobil.si/predplacniski-paketi/simpl',
    baseCost: 0,
    getCost: function (calls, messages, transfer) {
      return {
        amount: Math.ceil((calls + messages + transfer) / 1500) * 10
      };
    }
  },
  {
    operator: 'Si.mobil',
    title: 'SIMPL GLOBAL',
    url: 'https://www.simobil.si/predplacniski-paketi/simpl',
    baseCost: 0,
    getCost: function (calls, messages, transfer) {
      return {
        amount: (calls + messages + transfer) * 0.15
      };
    }
  },
  {
    operator: 'Si.mobil',
    title: 'SIMPL GLOBAL + zakup',
    url: 'https://www.simobil.si/predplacniski-paketi/simpl',
    baseCost: 0,
    getCost: function (calls, messages, transfer) {
      return {
        amount: 20 + (calls <= 1000 ? 0 : (calls - 1000) * 0.15) +
            (transfer <= 1000 ? 0 : (transfer - 1000) * 0.15)
      };
    }
  },
  /*
   * Telekom
   */
  {
    operator: 'Telekom',
    title: 'Brezskrbni',
    url: 'http://www.telekom.si/zasebni-uporabniki/paketi/vsi-paketi/paket-brezskrbni',
    baseCost: 19.95,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + Math.min(5, transfer * 0.01),
        slowTransfer: Math.max(0, transfer - 10 * 1024)
      };
    }
  },
  {
    operator: 'Telekom',
    title: 'Neomejeni A',
    url: 'http://www.telekom.si/zasebni-uporabniki/paketi/vsi-paketi/paketi-mobitel-neomejeni',
    baseCost: 20.95,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + transfer * 0.16,
        slowTransfer: Math.max(0, transfer - 512)
      };
    }
  },
  {
    operator: 'Telekom',
    title: 'Neomejeni B',
    url: 'http://www.telekom.si/zasebni-uporabniki/paketi/vsi-paketi/paketi-mobitel-neomejeni',
    baseCost: 24.95,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + Math.max(0, transfer - 1024) * 0.16,
        slowTransfer: Math.max(0, transfer - 1024)
      };
    }
  },
  {
    operator: 'Telekom',
    title: 'Neomejeni C',
    url: 'http://www.telekom.si/zasebni-uporabniki/paketi/vsi-paketi/paketi-mobitel-neomejeni',
    baseCost: 30.95,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + Math.max(0, transfer - 3 * 1024) * 0.16,
        slowTransfer: Math.max(0, transfer - 3.5 * 1024)
      };
    }
  },
  {
    operator: 'Telekom',
    title: 'Neomejeni D',
    url: 'http://www.telekom.si/zasebni-uporabniki/paketi/vsi-paketi/paketi-mobitel-neomejeni',
    baseCost: 40.95,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost
      };
    }
  },
  {
    operator: 'Telekom',
    title: 'Deezer neomejeni',
    url: 'http://www.telekom.si/zasebni-uporabniki/paketi/vsi-paketi/paketi-mobitel-neomejeni',
    baseCost: 27.95,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + Math.max(0, transfer - 1024) * 0.16
      };
    }
  },
  {
    operator: 'Telekom',
    title: 'Enostavni 100',
    url: 'http://www.telekom.si/zasebni-uporabniki/paketi/vsi-paketi/paketi-mobitel-enostavni',
    baseCost: 10.95,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + Math.max(0, calls + messages + transfer - 100) * 0.21,
        slowTransfer: Math.max(0, transfer - 512)
      };
    }
  },
  {
    operator: 'Telekom',
    title: 'Enostavni 300',
    url: 'http://www.telekom.si/zasebni-uporabniki/paketi/vsi-paketi/paketi-mobitel-enostavni',
    baseCost: 14.95,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + Math.max(0, calls + messages + transfer - 300) * 0.21,
        slowTransfer: Math.max(0, transfer - 512)
      };
    }
  },
  {
    operator: 'Telekom',
    title: 'Enostavni 1000',
    url: 'http://www.telekom.si/zasebni-uporabniki/paketi/vsi-paketi/paketi-mobitel-enostavni',
    baseCost: 15.95,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + Math.max(0, calls + messages + transfer - 1000) * 0.21,
        slowTransfer: Math.max(0, transfer - 512)
      };
    }
  },
  {
    operator: 'Telekom',
    title: 'Penzion 100',
    url: 'http://www.telekom.si/zasebni-uporabniki/paketi/vsi-paketi/paketa-mobitel-penzion',
    retiredOnly: true,
    baseCost: 11.95,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + Math.max(0, calls + messages + transfer - 100) * 0.13
      };
    }
  },
  {
    operator: 'Telekom',
    title: 'Penzion 300',
    url: 'http://www.telekom.si/zasebni-uporabniki/paketi/vsi-paketi/paketa-mobitel-penzion',
    retiredOnly: true,
    baseCost: 14.95,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + Math.max(0, calls + messages + transfer - 300) * 0.13,
        slowTransfer: Math.max(0, transfer - 512)
      };
    }
  },
  {
    operator: 'Telekom',
    title: 'Penzion Neomejeni',
    url: 'http://www.telekom.si/zasebni-uporabniki/paketi/vsi-paketi/paketa-mobitel-penzion',
    retiredOnly: true,
    baseCost: 17.95,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + Math.max(3, transfer * 0.01)
      };
    }
  },
  {
    operator: 'Telekom',
    title: 'Džabest Na polno',
    url: 'http://www.telekom.si/zasebni-uporabniki/paketi/vsi-paketi/paketa-mobitel-penzion',
    youngOnly: true,
    baseCost: 22.95,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + Math.max(0, transfer - 5 * 1024) * 0.16,
        slowTransfer: Math.max(0, transfer - 5 * 1024)
      };
    }
  },
  {
    operator: 'Telekom',
    title: 'Džabest 250',
    url: 'http://www.telekom.si/zasebni-uporabniki/paketi/vsi-paketi/paketa-mobitel-penzion',
    youngOnly: true,
    baseCost: 13.95,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + Math.max(0, calls + transfer - 250) * 0.16,
        slowTransfer: Math.max(0, transfer - 250)
      };
    }
  },
  /*
   * Telemach
   */
  {
    operator: 'Telemach',
    title: 'VEČ',
    url: 'http://telemach.si/mobilna-telefonija/narocniski-paketi',
    baseCost: 6,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost + (calls <= 120 ? 0 : (calls - 120) * 0.16),
        slowTransfer: Math.max(0, transfer - 500)
      };
    }
  },
  {
    operator: 'Telemach',
    title: 'ŠE VEČ',
    url: 'http://telemach.si/mobilna-telefonija/narocniski-paketi',
    baseCost: 15,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost,
        slowTransfer: Math.max(0, transfer - 5000)
      };
    }
  },
  {
    operator: 'Telemach',
    title: 'NAJVEČ',
    url: 'http://telemach.si/mobilna-telefonija/narocniski-paketi',
    baseCost: 25,
    getCost: function (calls, messages, transfer) {
      return {
        amount: this.baseCost,
        slowTransfer: Math.max(0, transfer - 10000)
      };
    }
  },
  {
    operator: 'Telemach',
    title: 'FREE2GO REVOLUCIJA',
    url: 'http://telemach.si/mobilna-telefonija/predplacniski-paketi',
    baseCost: 0,
    getCost: function (calls, messages, transfer) {
      return {
        amount: 7 + Math.max(0, calls + transfer - 1000) * 0.10
      };
    }
  }
];

function calculatePlans(callsQuantity, messagesQuantity, transferQuantity, isYoung, isRetired, nTop)
{
  var bestPlans = [];

  if (callsQuantity !== callsQuantity || messagesQuantity !== messagesQuantity ||
      transferQuantity !== transferQuantity) {
    return bestPlans;
  }

  for (var i in plans) {
    var plan = plans[i];

    if ((plan.youngOnly && !isYoung) || (plan.retiredOnly && !isRetired)) {
      continue;
    }

    plan.cost = plan.getCost(callsQuantity, messagesQuantity, transferQuantity);
    bestPlans.push(plan);
  }

  bestPlans = bestPlans.sort(function (a, b) {
    return a.cost.amount - b.cost.amount;
  });

  if (nTop) {
    bestPlans = bestPlans.slice(0, nTop);
  }

  return bestPlans;
}
