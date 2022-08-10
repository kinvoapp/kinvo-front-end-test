import { Box, Flex, Text } from "@chakra-ui/react";
import dynamic from 'next/dynamic';

const Charts = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

const options = {
    toolbar: {
        show: false,
    },
    zoom: {
        enabled: false,
    },

    xaxis: {
        type: 'radialBar',
        categories: [
            '2022-03-18T00:00:00.000Z',
            '2022-03-19T00:00:00.000Z',
            '2022-03-20T00:00:00.000Z',
            '2022-03-21T00:00:00.000Z',
            '2022-03-22T00:00:00.000Z',
            '2022-03-23T00:00:00.000Z',
            '2022-03-24T00:00:00.000Z',
        ]
    },
    dataLabels: {
        enabled: false,
    }
};

const series = [
    { name: 'serial1', data: [31, 250, 300, 844, 540, 644, 466] }
]

export default function Graphic() {
    return (
        <>
            <Flex w='100%'>
                <Box bg='white' w='100%' m={5} borderRadius='0.5rem'>
                    <Box p={5}>
                        <Text fontWeight='lighter'>Rentabilidade de titulos</Text>
                    </Box>
                    <Charts options={options} series={series} type='area' height={280} />
                </Box>
                <Box bg='white' w='100%' m={5} borderRadius='0.5rem'>
                    <Box p={5}>
                        <Text fontWeight='lighter'>Rentabilidade de titulos</Text>
                    </Box>
                    <Charts options={options} series={series} type='area' height={280} />
                </Box>
            </Flex>
        </>

    )

}