import React, { useState, useRef, useEffect } from 'react';
import { useSpring, useSprings, animated } from 'react-spring';

const trans = (x, y, z) => ({
  transform: `rotateY(-20deg) translateX(${x}px) translateY(${y}px) translateZ(${z}px)`
});


const ShufflingCards = ({ arr, targetImg = 0 }) => {
  const [orders, setOrders] = useState(arr.map((_, i) => i));

  const shouldFlip = useRef();

  shouldFlip.current = false;

  function next() {
    console.log('next called');
    setOrders(orders.map(i => (i + 1) % arr.length));
  }

  useEffect(() => {
    console.log('new order', orders);
    console.log('should flip');
  }, [orders]);

  useEffect(() => {
    if (targetImg > -1) {
      if (orders[targetImg] === 0) {
        console.log('target on front');
      } else {
        shouldFlip.current = orders[targetImg] !== arr.length;
        setTimeout(() => {
          next();
        }, 400);
      }
    }
  }, [targetImg, orders]);

  return (
    <div className="wrapper">
      {arr.map((_img, i) => (
        <Card i={i} key={`img${i}`} img={arr[i]} order={orders[i]} arr={arr} shouldFlip={shouldFlip} />
      ))}
    </div>
  );
}

const Card = ({ order, img, arr, shouldFlip, i }) => {

  const spring = useSpring({
    config: {
      mass: 0.5,
      tension: 150,
      friction: 26
    },
    to: async next => {

      const o = order === 0 ? arr.length : order

      if (order === 0) {
        const goUp = -800 - (arr.length - 3) * 30;
        if (shouldFlip.current) {
          await next(trans(o * -30, goUp, o * 10));
        }
      }
      await next(trans(-30 * o, 30 * o, 11 * o));
      await next(trans(-30 * o, 30 * o, 10 * o));
    },
    from: trans(50, -50, 0)
  });

  return (
    <animated.div style={spring}>
      <div
        className="container1 container"
        style={{ backgroundImage: `url(${img})` }}>
        index: {i}
      </div>
    </animated.div>
  )
}

export default ShufflingCards