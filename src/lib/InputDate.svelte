<script lang="ts">
	import { slide } from "svelte/transition";
	import logo from "$lib/assets/logo-iliad-cropped-en.webp";

  
  let day = $state('');
  let month = $state('');
  let year = $state('');

  let dayInput:HTMLInputElement | null =$state(null);
  let monthInput:HTMLInputElement | null =$state(null);
  let yearInput:HTMLInputElement | null =$state(null);
  let { form } = $props();

  let formEl: HTMLFormElement | null = $state(null);

  let submitter: HTMLButtonElement | null = $state(null);
  
  type I18Date = {
    title: string
    sub: string,
    subEn: string,
    birthDate: string;
    DMY: [string, string,string], 
    invalidDate: string, 
    remember: string,
  }

  const l: I18Date = {
      title: "Votre Plan d’Attribution Gratuite d’Actions",
      sub: "Pour accéder à votre attribution, merci de conﬁrmer votre date de naissance.",
      subEn: "To access your allocation, please confirm your birth date.",
      birthDate: 'Enter your date of birth',
      invalidDate: 'Invalid date of birth',
      DMY: ['DD','MM', 'YYYY'],
      remember: 'Se souvenir de moi'
  }

  function handleInput(event: Event, field: string) {
    const value = (event.target as HTMLInputElement).value.replace(/\D/g, '');
    switch (field) {
      case 'day':
          day = value.slice(0, 2);
          if (parseInt(day) > 31) day = '31';
          if (day.length === 2) monthInput?.focus();
          break;
      case 'month':
          month = value.slice(0, 2);
          if (parseInt(month) > 12) month = '12';
          if (month.length === 2) yearInput?.focus();
          break;
      case 'year':
          year = value.slice(0, 4);
          if (year.length === 4 && day && month) {
            formEl?.requestSubmit(submitter);
          }
          break;
    }
  }
  
  function handleKeydown(event: KeyboardEvent, field:string) {
    if (event.key === 'Backspace' && event.target && (event.target as HTMLInputElement).value === '') {
      event.preventDefault();
        switch (field) {
            case 'month':
            dayInput?.focus();
            break;
            case 'year':
            monthInput?.focus();
            break;
        }
    }
  }
  
  function handleFocus(event: FocusEvent) {
    (event.target as HTMLInputElement)?.select?.();
  }

</script>

  <div class="space-y-2 w-full inline-flex justify-center">
    <div class="flex items-center md:w-[104px] w-20 md:pl-0 pl-5 h-auto" aria-label="Lien vers site Iliad">
      <img loading="eager" src={logo} alt="Logo Iliad" />
    </div>
  </div>

  <form bind:this={formEl} method="POST" class="flex flex-col justify-center items-center space-y-2 md:w-[532px] w-11/12 self-center bg-white rounded-xl p-4 gap-y-3 py-12 px-16 text-center">
    <p class="text-igray-400 font-head font-light">
      {l.title}
    </p>
    <p class="text-black font-head font-light">
      {l.sub}
    </p>
    <p class="text-igray-400 italic font-head font-light text-balance">
      {l.subEn}
    </p>
    <!-- <label for="day" class="block text-sm font-medium text-left mb-4">
      {l.birthDate}
    </label> -->
    <div class="flex gap-x-3 items-center">
      <div class="relative">
        <input
          tabindex={1}
          bind:this={dayInput}
          name="day"
          type="number"
          id="day"
          class="w-14 h-12 px-2 py-1 border rounded-lg text-center"
          placeholder={l.DMY[0]}
          value={day}
          oninput={(e) => handleInput(e, 'day')}
          onkeydown={(e) => handleKeydown(e, 'day')}
          onfocus={handleFocus}
          maxlength="2"
          aria-label="Day"
        />
      </div>
      <div class="relative">
        <input
          tabindex={2}
          bind:this={monthInput}
          name="month"
          type="number"
          class="w-14 h-12 px-2 py-1 border rounded-lg text-center"
          placeholder={l.DMY[1]}
          value={month}
          oninput={(e) => handleInput(e, 'month')}
          onkeydown={(e) => handleKeydown(e, 'month')}
          onfocus={handleFocus}
          maxlength="2"
          aria-label="Month"
        />
      </div>
      <div class="relative">
        <input
          tabindex={3}
          bind:this={yearInput}
          name="year"
          type="number"
          class="w-20 h-12 px-2 py-1 border rounded-lg text-center"
          placeholder={l.DMY[2]}
          value={year}
          oninput={(e) => handleInput(e, 'year')}
          onkeydown={(e) => handleKeydown(e, 'year')}
          onfocus={handleFocus}
          maxlength="4"
          aria-label="Year"
        />
      </div>
      <div class="relative">
        <button
          bind:this={submitter} 
          tabindex={4}
          type="submit"
          aria-label="Check date"
          class="text-white bg-ired hover:bg-ired-800 focus:outline-none focus:bg-gray-200 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me-2 ml-2 top-[2px] relative"
        >
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
      </div>
      
    </div>
    
    <div class="flex items-center">
      <input 
        name="shouldRemember" type="checkbox" checked={false} id="default-checkbox" 
        class="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-ired focus:ring-1 focus:ring-offset-2 focus:ring-ired-700"
      >
      <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900">{l.remember}</label>
    </div>
    
    {#if form?.success === false}
      <p class="text-ired text-sm font-bold text-left mt-1" transition:slide>
        {form?.message || l.invalidDate}
      </p>
    {/if}
  </form>

<style lang="postcss">
  [type=number] {
    -moz-appearance: textfield;
  }
  [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
</style>