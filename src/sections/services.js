import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Image from 'components/image';

import icon1 from 'assets/solution.jpg';
import icon2 from 'assets/cloud.jpg';
import icon3 from 'assets/mobile.jpg';
import icon4 from 'assets/devops.jpg';
import icon5 from 'assets/agile.jpeg'
import icon6 from 'assets/webdev.jpg'

const SERVICES_DATA = [
  {
    icon: icon1,
    title: 'Solutions for Startups',
    text:
      'Hire Digita to rapidly build and test new software ideas. We’ll help you decrease time-to-market and enable you to focus on core competencies.',
  },
  {
    icon: icon6,
    title: 'Web Application Development',
    text:
      'Our custom application development firm delivers stable and responsive web applications from scratch that smoothly integrate with existing environments. We create a broad spectrum of web solutions.',
  },
  {
    icon: icon2,
    title: 'Cloud Based Application Development',
    text:
      'Digita Solutions will help you leverage the potential of AWS, Azure, and other cloud platforms and build scalable digital solutions with reduced IT costs and added agility.',
  },
  {
    icon: icon3,
    title: 'Mobile App Development',
    text:
      'Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery, and to ongoing ongoing support.',
  },
  {
    icon: icon4,
    title: 'DevOps',
    text:
      'Our DevOps Services help you align development and operations teams. You’ll improve code quality, adopt continuous integration, and deliver faster.',
  },
  {
    icon: icon5,
    title: 'Agile Services',
    text:
      "Our experts follow an agile development process through agile methodology to make all the team are on the same page. Our team has significant experience in designing, conceptualizing, sustaining, and implementing the agile processes through agile approach for you, as well as our project."
  }
];

const Services = () => {
  return (
    <Box sx={styles.services} id="services">
      <Container>
        <BlockTitle
          // slogan="Our Services"
          title="What We Offer"
          styles={styles.blockTitle}
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map((service, index) => (
            <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`}
            >
              <Box className="service-icon" sx={styles.icon}>
                <Image src={service.icon} alt="service" />
              </Box>
              <Heading as="h3">{service.title}</Heading>
              <Text as="p">{service.text}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, null, null, '140px'],
    '.service-card:nth-of-type(2)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(320.89deg, #25D9D9 10.83%, rgba(37, 217, 217, 0.5) 88.7%)',
      },
    },
    '.service-card:nth-of-type(3)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(319.4deg, #0898E7 5.17%, rgba(8, 152, 231, 0.5) 94.34%)',
      },
    },
    '.service-card:nth-of-type(4)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(322.63deg, #FF9066 9.94%, rgba(255, 144, 102, 0.5) 91.14%)',
      },
    },
  },
  blockTitle: {
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridGap: ['30px', null, null, null, null, '60px'],
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr 1fr',
      null,
      '1fr 1fr 1fr',
    ],
  },
  icon: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['100px', null, null, '130px'],
    height: ['100px', null, null, '130px'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ['20px', null, null, '40px'],
    backgroundImage:
      'linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)',
  },
  serviceCard: {
    borderRadius: '5px',
    borderColor: 'primary',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    padding: '15px',
    h3: {
      margin: 0,
      fontSize: ['18px', null, null, 3],
      fontWeight: 'bold',
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
      mb: ['20px', null, null],
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, '15px'],
      color: 'heading_secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0'],
    },
  },
};
