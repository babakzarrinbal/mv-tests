<template>
  <div class="w-100 h-100 overflow-auto">
    <h1 class="mb-5">تست مثال لازم</h1>
    <div
      class="row py-3 text-right border-top border-secondary px-3"
      style="direction:rtl;"
      v-for="(q,i) in questions"
      :key="i"
      :ref="'q-'+i"
    >
      <div class="col-12 mb-3 font-weight-bold">{{q}}</div>
      <div class="w-100">
        <div
          class="col-12 pb-2 form-check text-right d-flex answer-item"
          v-for="(j,k) in answers"
          :key="j"
        >
          <label
            @click="scrolltonext(i)"
            class="form-check-label flex-grow-1 pr-2"
            :for="'qid'+i+'_'+j"
          >
            <input
              class="form-check-input "
              type="radio"
              v-model="results[i]"
              :name="'q'+i"
              :id="'qid'+i+'_'+j"
              :value="k+1"
              checked
            />
            <span class="pr-4">
            {{j}}

            </span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.answer-item:not(:last-of-type) {
  border-bottom: 1px dashed rgb(0, 123, 255);
}
</style>

<script>
export default {
  data() {
    return {
      questions: [
        "يا از هفته گذشته تا به امروز سردرد داشتهايد؟",
        "آيا از هفته گذشته تا به امروز عصبی بودهايد و از داخل بدن احساس لرزش داشتهايد؟",
        "آيا از هفته گذشته تا به امروز افکار، عقايد يا کلمات ناخوشايند و نامربوطی مرتبا وارد ذهن ما شدهاند که رهايتان نکند؟",
        "آيا از هفته گذشته تا به امروز دچار ضعف، بیحالی و يا سرگیجه بودهايد؟",
        "آيا از هفته گذشته تا به امروز نسبت به روابط زناشويی بیمیل شدهايد؟",
        "آيا از هفته گذشته تا به امروز ايرادگیر و بهانهجو شدهايد؟",
        "آيا از هفته گذشته تا به امروز اين اعتقاد را داشتهايد که شخص ديگری میتواند افکار شما را از راه دور کنترل کند؟",
        "آيا از هفته گذشته تا به امروز احساس کردهايد که ديگران باعث ناراحتیها و گرفتاریهای ما هستند؟",
        "آيا از هفته گذشته تا به امروز فراموشکار شدهايد؟",
        "آيا از هفته گذشته تا به امروز در کارها بیتوجه و بیدقت شدهايد؟",
        "آيا از هفته گذشته تا به امروز دلخور يا عصبی شدهايد؟"
      ],
      answers: ["هیچ", "کمی", "تاحدی", "زیاد", "خیلی زیاد"],
      results: []
    };
  },
  created() {},
  methods: {
    scrolltonext(i) {
      let el = this.$refs["q-" + (i + 1)];
      if (el) el[0].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};
</script>
