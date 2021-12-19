// export function getIndexBy(array: Array<{}>, { name, value }): number {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i][name] === value) {
//       return i;
//     }
//   }
//   return -1;
// }

// function currentYPosition() {
//   if (!window) {
//     // return ;
//   }
//   // Firefox, Chrome, Opera, Safari
//   if (window.pageYOffset) return window.pageYOffset;
//   // Internet Explorer 6 - standards mode
//   if (document.documentElement && document.documentElement.scrollTop)
//     return document.documentElement.scrollTop;
//   // Internet Explorer 6, 7 and 8
//   if (document.body.scrollTop) return document.body.scrollTop;
//   return 0;
// }

// function elmYPosition(elm) {
//   var y = elm.offsetTop;
//   var node = elm;
//   while (node.offsetParent && node.offsetParent !== document.body) {
//     node = node.offsetParent;
//     y += node.offsetTop;
//   }
//   return y;
// }

// export function scrollTo(selector) {
//   var elm = document.querySelector(selector);
//   // if (!selector || !elm) {
//   //   return ;
//   // }
//   var startY = currentYPosition();
//   var stopY = elmYPosition(elm);
//   var distance = stopY > startY ? stopY - startY : startY - stopY;
//   // if (distance < 100) {
//   //   window.scrollTo(0, stopY);
//   //   // return;
//   // }
//   var speed = Math.round(distance / 50);
//   if (speed >= 20) speed = 20;
//   var step = Math.round(distance / 25);
//   var leapY = stopY > startY ? startY + step : startY - step;
//   var timer = 0;
//   if (stopY > startY) {
//     for (var i = startY; i < stopY; i += step) {
//       setTimeout(
//         (function (leapY) {
//           return () => {
//             window.scrollTo(0, leapY);
//           };
//         })(leapY),
//         timer * speed
//       );
//       leapY += step;
//       if (leapY > stopY) leapY = stopY;
//       timer++;
//     }
//     return;
//   }
//   for (let i = startY; i > stopY; i -= step) {
//     setTimeout(
//       (function (leapY) {
//         return () => {
//           window.scrollTo(0, leapY);
//         };
//       })(leapY),
//       timer * speed
//     );
//     leapY -= step;
//     if (leapY < stopY) leapY = stopY;
//     timer++;
//   }
//   return false;
// }

// new util
export function toBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export function parseWebAPIErrors(response: any): string[] {
  const result: string[] = [];

  if (response.error) {
    if (typeof response.error === 'string') {
      result.push(response.error);
    } else if (Array.isArray(response.error)) {
      response.error.forEach((value) => result.push(value.description));
    } else {
      const mapErrors = response.error.errors;
      const entries = Object.entries(mapErrors);
      entries.forEach((arr: any[]) => {
        const field = arr[0];
        arr[1].forEach((errorMessage) => {
          result.push(`${field}: ${errorMessage}`);
        });
      });
    }
  }

  return result;
}

export function formatDateFormData(date: Date) {
  date = new Date(date);
  const format = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const [{ value: month }, , { value: day }, , { value: year }] =
    format.formatToParts(date);

  // yyyy-MM-dd
  return `${year}-${month}-${day}`;
}
