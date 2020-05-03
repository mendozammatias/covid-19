export const isRiskPatient = (ctx) =>
  ctx.soreThroat ||
  ctx.difficultyBreathing ||
  ctx.diabetes ||
  ctx.cancer ||
  ctx.isPregnant ||
  ctx.isOver60yearsOld ||
  ctx.hepatic ||
  ctx.kidneyDisease ||
  ctx.respiratoryDisease;

export const hasFever = (ctx) => ctx.bodyTemperature >= 38;
