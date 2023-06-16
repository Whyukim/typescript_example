{
  // Enum => 타입이 변하지않아서 안정성잇는것

  // js
  const MAX_NUM = 1;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // ts => 위에서부터 0으로 자동 값 지정
  // 💩 사용 않하는게 좋음(타입이 보장이 안됨 // enum보다는 union타입 사용하세요~)
  enum Days {
    Monday = 1, //0
    Tuesday, // 1
    Wednesday, //2
    Thursday,
    Friday,
    Satarday,
    Sunday,
  }
  let day = Days.Monday;
  day = 10; // 💩 10 없는데 그냥실행됨
}
