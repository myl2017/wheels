<template xmlns="http://www.w3.org/1999/html">
	<button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
		<g-icon class="icon" v-if="icon && !loading" :name="icon">
		</g-icon>
		<g-icon v-if="loading" class="loading icon" name="loading">
		</g-icon>
		<div class="content">
			<slot/>
		</div>
	</button>
</template>

<script>
  export default {
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) { // 属性检查器
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>

<style lang="scss">
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.g-button {
		font-size: var(--font-size);
		height: var(--button-height);
		padding: 0 .9em;
		border-radius: var(--border-radius);
		border: 1px solid var(--border-color);
		background: var(--button-bg);
		display: inline-flex;
		justify-content: center;
		align-items: center;
		vertical-align: middle;

		> .content {
			order: 2;
		}

		> .icon {
			order: 1; /*排列顺序*/
			margin-right: .3em
		}

		&.icon-right {
			> .content {
				order: 1;
			}

			> .icon {
				order: 2;
				margin-right: 0;
				margin-left: .3em
			}
		}

		.loading {
			animation: spin 1s infinite linear;
		}

		&:hover {
			border-color: var(--border-color-hover);
		}

		&:active {
			background-color: var(--button-active-bg);
		}

		&:focus {
			outline: none;
		}
	}
</style>

