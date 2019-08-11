import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { Divider, Typography } from 'antd'
import { observer, inject } from 'mobx-react'
import cs from 'classnames'

import { FinContext } from '../FinContext'
import { CTAButton } from '../CTAButton'
import { Paper } from '../Paper'

import infinity from '../../assets/infinity.svg'

import styles from './styles.module.css'

const { Text } = Typography

@inject('auth')
@observer
export class PricingSection extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  }

  render() {

    return (
      <FinContext.Consumer>
        {project => (
          <section className={styles.container}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                Pricing
              </h1>

              <div className={styles.subtitle}>
                Free. Unlimited. <b>Pay as you Grow.</b>
              </div>

              <div className={styles.plans}>
                <Paper className={styles.plan}>
                  <h3 className={styles.name}>
                    Free
                  </h3>

                  <Divider />

                  <div className={styles.features}>
                    <div />

                    <div>
                      Price
                    </div>

                    <div>
                      Rate Limit
                    </div>

                    <div className={styles.emphasis}>
                      API Calls
                    </div>

                    <div>
                      $0 / call
                    </div>

                    <div>
                      N / day
                    </div>

                    <div className={styles.emphasis}>
                      Compute Time
                    </div>

                    <div>
                      $0
                    </div>

                    <div>
                      <img className={styles.infinity} src={infinity} />
                    </div>

                    <div className={styles.emphasis}>
                      Bandwidth
                    </div>

                    <div>
                      $0 / GB
                    </div>

                    <div>
                      100 GB / mo
                    </div>
                  </div>

                  <Divider />

                  <div style={{ color: project.saas.theme['@primary-color'] }}>
                    FREE FOREVER
                  </div>

                  <div className={styles.price}>
                    <span className={styles.dollas}>$0.00</span> / mo
                  </div>

                  <Link to='/signup'>
                    <CTAButton
                      type='secondary'
                      className={styles.secondaryCTAButton}
                    >
                      Get Started
                    </CTAButton>
                  </Link>
                </Paper>

                <Paper className={styles.plan}>
                  <h3 className={styles.name}>
                    Unlimited
                  </h3>

                  <Divider />

                  <div className={styles.features}>
                    <div />

                    <div>
                      Price
                    </div>

                    <div>
                      Rate Limit
                    </div>

                    <div className={styles.emphasis}>
                      API Calls
                    </div>

                    <div>
                      $0.0004 / call
                    </div>

                    <div>
                      <img className={styles.infinity} src={infinity} />
                    </div>

                    <div className={styles.emphasis}>
                      Compute Time
                    </div>

                    <div>
                      $0.0034 / s
                    </div>

                    <div>
                      <img className={styles.infinity} src={infinity} />
                    </div>

                    <div className={styles.emphasis}>
                      Bandwidth
                    </div>

                    <div>
                      $0.2 / GB
                    </div>

                    <div>
                      <img className={styles.infinity} src={infinity} />
                    </div>
                  </div>

                  <Divider />

                  <div style={{ color: project.saas.theme['@primary-color'] }}>
                    STARTING AT
                  </div>

                  <div className={styles.price}>
                    <span className={styles.dollas}>$0.99</span> / mo
                  </div>

                  <Link to='/signup'>
                    <CTAButton
                      type='primary'
                    >
                      Get Started
                    </CTAButton>
                  </Link>
                </Paper>
              </div>
            </div>
          </section>
        )}
      </FinContext.Consumer>
    )
  }
}
